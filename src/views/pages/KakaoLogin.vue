<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'KakaoOAuthCallback',

  mounted() {
    // Kakao OAuth로부터 넘어온 인증 코드를 추출
    const code = this.$route.query.code
    const error = this.$route.query.error
    const errorDescription = this.$route.query.error_description
    const state = this.$route.query.state
    console.log(1234)
    console.log(code, error, errorDescription, state)
    // 추출한 인증 코드를 이용하여 POST 요청 보내기
    this.sendPostRequest(code, error, errorDescription, state)
  },
  methods: {
    async sendPostRequest(code, error, errorDescription, state) {
      console.log(`${import.meta.env.VITE_DEV_SERVRE}/admins/login/kakao/oauth`)
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_DEV_SERVRE}/admins/login/kakao/oauth`,
          {
            code: code,
            error: error,
            errorDescription: errorDescription,
            state: state,
          },
          {
            withCredentials: true, // 여기에 withCredentials 옵션을 추가
          },
        )

        console.log(response)
        // POST 요청에 대한 응답 처리
        localStorage.setItem('memberId', response.data.id)
        this.$router.push('/')
      } catch (error) {
        this.$router.push('/login')
        // 오류 처리
        // ...
      }
    },
  },
}
</script>
<!-- moamoamoabam -->
