<template>
  <div class="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p class="text-body-secondary">Sign In to your account</p>
                  <form v-on:submit="submitForm">
                    <CInputGroup class="mb-4">
                      <CInputGroupText>
                        <CIcon icon="cil-lock-locked" />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autocomplete="current-password"
                        v-model="adminKey"
                      />
                    </CInputGroup>
                    <a :href="`${link}${adminKey}${redirectUrl}`"
                      ><img src="../../layouts/kakaoTalk.png" style="width: 50px; height: 50px"
                    /></a>
                  </form>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <CButton color="light" variant="outline" class="mt-3"> Register Now! </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    const data = import.meta.env.VITE_DEPLOY_ENDPOINT
    console.log(data)
    return {
      adminKey: '',
      link:
        `https://kauth.kakao.com/oauth/authorize?` +
        `response_type=code&` +
        `client_id=${import.meta.env.VITE_KAKAO_LOGIN_CLIENT_ID}&` +
        `state=`,
      redirectUrl: `&redirect_uri=${import.meta.env.VITE_DEPLOY_ENDPOINT}` + `/login/kakao/oauth`,
    }
  },
}
</script>
