<template>
  <h2>신규 상품 발행</h2>
  <br />
  <br />
  <CModal :backdrop="false" :keyboard="true" v-if="showModal" visible>
    <CModalHeader>
      <CModalTitle>Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Modal body text goes here.</CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="closeModal">Close</CButton>
    </CModalFooter>
  </CModal>

  <form v-on:submit="submitForm">
    <CInputGroup class="mb-3">
      <CInputGroupText id="basic-addon1">상품 이름 </CInputGroupText>
      <CFormInput
        id="name"
        placeholder="ex) 밥세공기 쿠폰"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="name"
      />
    </CInputGroup>

    <CInputGroup>
      <CInputGroupText>
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="새 스킨"
          value="bird"
          v-model="skinType"
        />
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="방 스킨"
          value="room"
          v-model="skinType"
        />
      </CInputGroupText>
    </CInputGroup>
    <br />
    <CInputGroup>
      <CInputGroupText>쿠폰 상세 설명</CInputGroupText>
      <CFormTextarea
        id="description"
        aria-label="With textarea"
        v-model="description"
      ></CFormTextarea>
    </CInputGroup>

    <div>금액</div>
    <CInputGroup class="mb-3">
      <CInputGroupText id="basic-addon1">낮 벌레 </CInputGroupText>
      <CFormInput
        id="point"
        placeholder="ex) 10"
        aria-label="Point"
        aria-describedby="basic-addon1"
        v-model="morningBug"
      />
      <CInputGroupText>밤 벌레</CInputGroupText>
      <CFormInput id="stock" placeholder="ex) 10" aria-label="Server" v-model="nightBug" />
      <CInputGroupText>황금 벌레</CInputGroupText>
      <CFormInput id="stock" placeholder="ex) 10" aria-label="Server" v-model="goldenBug" />
    </CInputGroup>

    <br />
    <CInputGroupText>기본 스킨 이미지</CInputGroupText>
    <CInputGroup class="mb-3">
      <CFormInput type="file" id="inputGroupFile02" v-model="basicSkin" />
    </CInputGroup>
    <CInputGroupText>추가 스킨 (자는 스킨) </CInputGroupText>
    <CInputGroup class="mb-3">
      <CFormInput type="file" id="inputGroupFile02" v-model="addSkin" />
    </CInputGroup>
    <br />

    <br />
    <CButton type="submit" color="primary" size="lg">Large button</CButton>
  </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'ItemCreate',

  data() {
    return {
      name: '',
      skinType: null,
      description: '',
      morningBug: '',
      nightBug: '',
      goldenBug: '',
      basicSkin: null,
      addSkin: null,
      basic: [],
    }
  },

  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        skinType: this.skinType,
        description: this.description,
        morningBug: this.morningBug,
        nightBug: this.nightBug,
        goldenBug: this.goldenBug,
        basicSkin: this.basicSkin,
        addSkin: this.addSkin,
        basic: [],
      }
      console.log(formData)
      axios
        .post('https://dev-api.moabam.com/admins/coupons', formData, {
          withCredentials: true,
        })
        .then((response) => {
          console.log('성공?')
          this.showModal = true
        })
        .catch((error) => {
          console.log(error)
        })
    },

    closeModal() {
      this.showModal = false
    },
  },
}
</script>
