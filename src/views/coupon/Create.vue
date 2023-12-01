<template>
  <h2>신규 쿠폰 발행</h2>
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
      <CInputGroupText id="basic-addon1">쿠폰 이름 </CInputGroupText>
      <CFormInput
        id="name"
        placeholder="ex) 밥세공기 쿠폰"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="name"
      />
    </CInputGroup>
    <CInputGroup class="mb-3">
      <CInputGroupText id="basic-addon1">쿠폰 금액 </CInputGroupText>
      <CFormInput
        id="point"
        placeholder="ex) 10"
        aria-label="Point"
        aria-describedby="basic-addon1"
        v-model="point"
      />
      <CInputGroupText>발행 수</CInputGroupText>
      <CFormInput id="stock" placeholder="ex) 10" aria-label="Server" v-model="stock" />
    </CInputGroup>

    <CInputGroup>
      <CInputGroupText>
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="아침 쿠폰"
          value="MORNING_BUG"
          v-model="couponType"
        />
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="밤 쿠폰"
          value="NIGHT_BUG"
          v-model="couponType"
        />
        <CFormCheck
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          label="황금 쿠폰"
          value="GOLDEN_BUG"
          v-model="couponType"
        />
      </CInputGroupText>
    </CInputGroup>
    <br />
    <CInputGroup>
      <CInputGroupText>쿠폰 발급 가능 날짜</CInputGroupText>
      <input type="date" class="form-control" id="startAt" v-model="startAt" />
      <CInputGroupText>쿠폰 정보 오픈 날짜</CInputGroupText>
      <input type="date" class="form-control" id="openAt" v-model="openAt" />
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
    <br />
    <CButton type="submit" color="primary" size="lg">Large button</CButton>
  </form>
</template>
<script>
import axios from 'axios'

export default {
  name: 'CouponCreate',

  data() {
    return {
      name: '',
      point: null,
      description: '',
      couponType: '',
      stock: null,
      startAt: '',
      openAt: '',
    }
  },

  methods: {
    submitForm() {
      const formData = {
        name: this.name,
        point: this.point,
        description: this.description,
        couponType: this.couponType,
        stock: this.stock,
        startAt: this.startAt,
        openAt: this.openAt,
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
