<template>
    <div class="login">
        <img class="cover" src="static/img/login.gif" alt="">
        <p class="line">
            <span class="icon-mobile"></span>
            <input type="tel" placeholder="请输入手机号" @input="inputChange" maxlength="13" v-model="phone">
            <span class="icon-cancel-circle" v-show="phone" @click="phone = ''"></span>
        </p>
        <p class="line">
            <span class="icon-key"></span>
            <input :type="passwordShow?'text':'password'" placeholder="请输入密码" v-model="password">
            <span :class="passwordShow?'icon-eye':'icon-eye-blocked'" @click="passwordShow = !passwordShow"></span>
        </p>
        <p class="btn-large-red" @click="send">登 录</p>
        <p class="jump">还没有账号？<span class="green" @click="jump">注册一个</span></p>
    </div>
</template>

<script>
export default {
    data() {
        return{
            phone: '',
            password: '',
            passwordShow: false
        }
    },
    methods: {
        inputChange(e) {
            var val = e.target.value
            var arr = val.split(' ');
            var Arr = [];
            var Str = '';
            for(var i = 0 ; i < arr.length ; i ++){
                var arr1 = arr[i].split('');
                for(var j = 0 ; j < arr1.length ; j ++){
                    Arr.push(arr1[j]);
                }
            }
            if(Arr.length > 3 && Arr.length <=7){
                Arr.splice(3,0,' ');
            }else if(Arr.length > 7){
                Arr.splice(7,0,' ');
                Arr.splice(3,0,' ');
            }
            Arr.forEach(function(ele,index){
                Str += ele;
            })
            this.phone = Str
        },
        send() {
            let phone = this.phone.replace(/\s+/g,"")
            if (this.phone.length === 0) {
                this.$toast('手机号不能为空')
            } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)) {
                this.$toast('手机号格式不正确')
            } else if (this.password.length === 0) {
                this.$toast('密码不能为空')
            } else {
                this.$http.get(`${this.resource}/user/login`, {params: {phone: phone, password: this.password}}).then(({ data }) => {
                    sessionStorage.setItem('user', JSON.stringify(data))
                    eventBus.$emit('user', data)
                    this.$toast('恭喜你登录成功，欢迎来到美味食府')
                    setTimeout(() => {
                       this.$router.push('/menulist')
                    }, 500)
                }).catch((err) => {
                    this.$toast(err.response.data.errMsg)
                })
           }
        },
        jump() {
            this.$router.push('/registered')
        }
    }
}
</script>
