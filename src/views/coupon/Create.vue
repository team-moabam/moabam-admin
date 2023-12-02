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

  <form v-on:submit.prevent="submitForm">
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
          id="flexRadioVModel1"
          label="아침 쿠폰"
          value="아침"
          v-model="couponType"
        />
        <CFormCheck
          type="radio"
          id="flexRadioVModel2"
          label="밤 쿠폰"
          value="저녁"
          v-model="couponType"
        />
        <CFormCheck
          type="radio"
          id="flexRadioVModel2"
          label="황금 쿠폰"
          value="황금"
          v-model="couponType"
        />
        <CFormCheck
          type="radio"
          id="flexRadioVModel2"
          label="할인 쿠폰"
          value="할인"
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
    <CButton type="submit" color="primary" size="lg">쿠폰 발행</CButton>
  </form>
</template>
<script>
import { cilRouter } from '@coreui/icons'
import axios from 'axios'

export default {
  name: 'CouponCreate',

  data() {
    return {
      name: '',
      point: null,
      description: '',
      couponType: 'MORNING_BUG',
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
        type: this.couponType,
        maxCount: this.stock,
        startAt: this.startAt,
        openAt: this.openAt,
      }
      console.log(formData)

      axios
        .post(`${import.meta.env.VITE_DEV_SERVRE}/admins/coupons`, formData, {
          withCredentials: true,
        })
        .then((result) => {
          console.log(result)
          this.showModal = true
        })
    },

    closeModal() {
      this.showModal = false
    },
  },
}
</script>
