<template>
    <div class="registered">
        <img class="cover" src="static/img/bind.png" alt="">
        <form name="form">
            <p class="line">
                <span class="icon-mobile"></span>
                <input ref="phone" type="tel" placeholder="请输入手机号" @input="inputChange" maxlength="13" v-model="user.phone">
                <span class="icon-cancel-circle" v-show="user.phone" @click="clearInfo('phone')" ref="phone"></span>
            </p>
            <p class="line">
                <span class="icon-user"></span>
                <input type="text" placeholder="请输入昵称" v-model="user.name">
                <span class="icon-cancel-circle" v-show="user.name" @click="clearInfo('name')" ref="name"></span>
            </p>
            <p class="line">
                <span class="icon-key"></span>
                <input :type="passwordShow?'text':'password'" placeholder="请输入密码" v-model="user.password">
                <span :class="passwordShow?'icon-eye':'icon-eye-blocked'" @click="passwordShow = !passwordShow"></span>
            </p>
        </form>
        <p class="btn-large-red" @click="add">注 册</p>
        <span class="jump" @click="jump">去登录</span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            user: {
                phone: '',
                name: '',
                password: ''
            },
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
            this.user.phone = Str
        },
        clearInfo(e) {
            this.user[e] = ''
        },
        add() {
            let phone = this.user.phone.replace(/\s+/g,"")
            if (this.user.phone.length === 0) {
                this.$toast('手机号不能为空')
            } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)) {
                this.$toast('手机号格式不正确')
            } else if (this.user.name.length === 0) {
                this.$toast('昵称不能为空')
            } else if (this.user.password.length === 0) {
                this.$toast('密码不能为空')
            } else {
                let user = Object.assign({}, this.user)
                user.phone = phone
                this.$http.post(`${this.resource}/user/add`, user).then(res => {
                   this.$toast('恭喜你注册成功，3秒后自动跳转到登录页面')
                   setTimeout(() => {
                       this.$router.push('/login')
                   }, 3000)
                }).catch((err) => {
                    this.$toast(err.response.data.errMsg)
                })
           }
        },
        jump() {
            this.$router.push('/login')
        }
    }
}
</script>
