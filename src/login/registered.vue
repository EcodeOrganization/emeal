<template>
    <div class="registered">
        <img class="cover" src="static/img/bind.png" alt="">
        <p class="line">
            <span class="icon-mobile"></span>
            <input type="tel" placeholder="请输入手机号" @input="inputChange" maxlength="13" v-model="form.phone">
            <span class="icon-cancel-circle" v-show="form.phone" @click="clearInfo('phone')"></span>
        </p>
        <p class="line">
            <span class="icon-user"></span>
            <input type="text" placeholder="请输入昵称" v-model="form.name">
            <span class="icon-cancel-circle" v-show="form.name" @click="clearInfo('name')" ref="name"></span>
        </p>
        <p class="line">
            <span class="icon-key"></span>
            <input :type="passwordShow?'text':'password'" placeholder="请输入密码" v-model="form.password">
            <span :class="passwordShow?'icon-eye':'icon-eye-blocked'" @click="passwordShow = !passwordShow"></span>
        </p>
        <p class="btn-large-red" @click="add">注 册</p>
        <span class="jump" @click="jump">去登录</span>
    </div>
</template>

<script>
export default {
    data() {
        return{
            form: {
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
            this.form.phone = Str
        },
        clearInfo(e) {
            this.form[e] = ''
        },
        add() {
            let phone = this.form.phone.replace(/\s+/g,"")
            if (this.form.phone.length === 0) {
                this.$toast('手机号不能为空')
            } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)) {
                this.$toast('手机号格式不正确')
            } else if (this.form.name.length === 0) {
                this.$toast('昵称不能为空')
            } else if (this.form.password.length === 0) {
                this.$toast('密码不能为空')
            } else {
                let form = Object.assign({}, this.form)
                form.phone = phone
                this.$http.post(`${this.resource}/user/add`, form).then(() => {
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
