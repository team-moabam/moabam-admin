## 모아밤 Admin 페이지

[템플릿](https://github.com/coreui/coreui-free-vue-admin-template)

## 추가 작성시 사용법

### 새로운 페이지

#### \_nav.js

사이드바에 이동할 수 있는 버튼을 만드는 곳으로,
`_nav.js`파일 맨 아래로 가서 작성하면 됩니다.

#### 작성 예시

```js
{
    component: 'CNavTitle',
    name: '뱃지 관리',
},
{
    component: 'CNavGroup',
    name: '뱃지 관리',
    to: '/badge',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: '뱃지 생성',
        to: '/badge/create',
      },
      {
        component: 'CNavItem',
        name: '뱃지 관리',
        to: '/badge/management',
      },
    ],
},
```

- `CNavTitle`: 각 그룹을 구분할 수 있는 문구 추가 가능
- `CNavGroup`: 아이템들을 하나의 그룹으로 그룹화가 가능합니다.
- `CNavItem`: 하나의 그룹에 포함할 아이템들입니다.

#### 라우팅

새로운 페이지를 넣게 된다면 라우팅이 필요하게 됩니다.
`router/index.js`에 포함시키면 됩니다.

#### 작성 예시

```js
{
    path: '/member',
    name: 'Member',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    redirect: '/member/blackList',
    children: [
      {
        path: 'blackList',
        name: 'BlackList',
        component: () => import('@/views/member/BlackList.vue'),
      },
        {
        path: ':id',
        name: 'BlackList',
        component: () => import('@/views/member/BlackList.vue'),
      },
    ],
},
```

- `path`: 라우팅 url입니다.
- `name`: vue파일에서 name입니다.
- `redirect`: 기본 path가 아닌 다른 url을 사용하고 싶은경우 사용하면 됩니다.(Optional)
- `children`: 루트 라우트를 기본으로 추가적인 라우팅을 원할 때 사용합니다.
  - `path`: 루트 url에서 추가적인 매핑이 필요한 경우 사용합니다.
    - Spring의 `RequestMapping`과 `PostMapping`을 같이 사용하는 것과 같습니다.
    - 다만 children에서는 `/`로 시작하면 안됩니다.
  - `name`: `vue`파일에서의 `name`과 동일해야하며, 공백이 있으면 안됩니다.
  - `component`: `vue`파일의 위치를 지정해 줘야 합니다.

## 페이지 구성

기본 form은 [UI Component Docs](https://coreui.io/vue/docs)에서 찾아서 복사 및 붙어넣기 하시면 됩니다.

### vue파일의 구성

```vue
<template></template>

<script>
export default {
  name: 'BlackList',
}
</script>
```

vue는 크게 `template`과 `script`로 구성되어 있습니다. (`style`도 넣을 수 있습니다.)
`template`의 경우 `html`과 같으며, `script`의 경우 js와 동일합니다.

script에서는 라우팅의 `name`과 동일한 `name`을 넣으시면 됩니다.

### 데이터 바인딩

데이터를 백으로 보내기 위해 api를 요청을 보내야합니다.

이때, vue의 데이터를 script와 template에서 동시에 초기화 및 사용가능한 양방향 바인딩이 가능합니다.

### 데이터 바인딩 예시

```vue
export default { name: 'CouponCreate', data() { return { name: '', point: null, description: '',
couponType: 'MORNING_BUG', stock: null, startAt: '', openAt: '', } },
```

양방향 데이터 바인딩을 위해 데이터에 대한 정의가 필요합니다.
위와 같이 정의를 하면 되며, 다만 `radio`타입의 경우 기본 값을 위와 같이 넣어줘야합니다.
정하지 않을 경우 바인딩 값이 `true`나 빈 값이 나오게 됩니다.

위와 같이 하게 되면 초기화를 하게 된 것이고, 이제 페이지에서 사용자가 입력한 값과 매핑을 해줘야 합니다.

```vue
<CInputGroup class="mb-3">
    <CInputGroupText id="basic-addon1">쿠폰 이름 </CInputGroupText>
      <CFormInput
        id="name"
        placeholder="ex) 밥세공기 쿠폰"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="name" <!-- 여기 부분 -->
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
```

위와 같은 예시에서 `v-model`을 통해 쉽게 바인딩이 가능합니다.

### 데이터 요청시

데이터를 요청하게 되면 다양한 이벤트를 통해 요청을 보내게 됩니다.

이렇게 되면 `template`에서 요청 이벤트를 발생시키고, 아래와 같이 해당 이벤트에 대한 method를 정의하여 사용하면 됩니다.

```vue
</script>
  ...

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
        .post(
          `${import.meta.env.VITE_DEV_SERVRE}/admins/coupons`,
          { body: formData },
          {
            withCredentials: true,
          },
        )
        .then((result) => {
          console.log(result)
        })
    },

    closeModal() {
      this.showModal = false
    },
  },
}
</script>
```

- 가장 위 부터 `method`를 사용할 때 사용하면 됩니다.
- `fromData`: 양방향 바인딩이 가능한 `data()`로 데이터 전송을 위한 객체를 만들 수 있습니다.

### 데이터 요청

데이터 요청의 경우 `axios`를 사용하고 있습니다.
현재 하드코딩 되어 있어서 `withCredentials`는 따로 붙여줘야할 거 같습니다.

### 추가 환경변수가 필요한 경우

`.evn`파일을 추가하고
`import.meta.env.VITE_DEV_SERVER`와 같이 사용하면 됩니다.

### pathVariable로 데이터 받기

`index.js`에

```
path: '/member/:memberId',
    name: 'Member',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
}
```

위와 같이 라우딩을 해준 후

`script`에서 `$route.params.memberId`와 같이 데이터를 얻어오면 됩니다.

### queryParam로 데이터 받기

queryParam같은 경우도 동일하게 `script`에서 `$route.params.memberId`와 같이 데이터를 얻어오면 됩니다.
