<script>
export default {
  name: 'app',
  created () {
    setInterval(function() {
      try {
        document.getElementById('num').innerHTML = '양치하기 좋은 현재 온도 ' + (Math.random() * 10 + 30).toFixed(3) + '도';
      } catch { return }
    }, 500);
    setInterval(function() {
      try {
        document.getElementById('heart').innerHTML = '내 마음의 온도 ' + (Math.random() * 10 + 90).toFixed(2) + '도';
      } catch { return }
    }, 300);
  },
  data () {
    return {
      bed: false,
      song: false,
      paste: false,
      salt: false
    }
  },
  methods: {
    onToothpaste(title, info) {
      this.salt = false
      this.paste = !this.paste
      this.$swal(title, info, 'success')
    },
    onSalt(title, info) {
      this.salt = true
      this.$swal(title, info, 'success')
    },
    play() {
      document.getElementById('audio').play()
      this.song = !this.song
      this.$swal('자장가를 재생했습니다!', '여러분의 관심사와 흥미를 빅데이터로 분석하여, 여러분이 가장 좋아하는 자장가를 찾아 불러 드리겠습니다.', 'success')
    },
    stop() {
      document.getElementById('audio').pause()
      this.song = !this.song
      this.$swal('자장가를 일시 정지했습니다!', '로봇을 사용하여 자장가를 정지하는 데 성공했습니다.', 'success')
    }
  }
}
</script>

<template>
  <div id="app">
      <h1>🏠 스마트홈</h1>
      <audio id="audio">
        <source src="./assets/dimigo.mp3" type="audio/mpeg">
      </audio>
      <div v-if="!bed" class="home">
        <img v-if="salt" src="./assets/salt.jpg"/>
        <img v-else-if="!paste" src="./assets/req.jpeg"/>
        <img v-else src="./assets/res.jpg"/>
        <div id="num">양치하기 좋은 현재 온도 35.123도</div>
        <div id="heart">내 마음의 온도 22.80도</div>
      </div>
      <div v-else class="home">
        <img class="bed" src="./assets/bed.jpg"/>
        <p class="bed" v-if="!song">침대에 누워 스마트폰을 누르면 자장가가 나옵니다.</p>
        <p class="bed" v-else>인류 문화의 역대급 산물인 엄청난 자장가가 나오고 있습니다!</p>
      </div>
      <div class="phone">
        <div class="inner" v-if="!bed">
          <p>스마트폰</p>
          <button v-if="!paste" 
            @click="onToothpaste('치약을 짰습니다!', '최첨단 4차 산업혁명 기술을 이용하여 매우 효율적으로 치약을 짜는 데 성공했습니다.')"
          >
              치약 짜기
          </button>
          <button v-else 
            @click="onToothpaste('치약을 제거했습니다!', '엄청난 빅데이터 분석 끝에 매우 효과적으로 치약을 제거하는 데 성공했습니다.')"
          >
            치약 없애기
          </button>
          <br/>
          <button
            @click="onSalt('소금을 뿌렸습니다!', '소비자의 needs를 파악하여 글로벌 시장을 선도할 수 있게 AI를 가동한 결과, 여러분의 양치 취향에 따라 소금을 뿌리는 데 성공했습니다.')"
          >
            소금 뿌리기
          </button>
        </div>
        <div class="inner" v-else>
          <p>스마트폰</p>
          <button v-if="!song" @click="play">누웠어</button>
          <button v-else @click="stop">일어날래</button>
        </div>
      </div>
      <button @click="bed = !bed">{{ bed ? '화장실' : '침실' }}로 가기</button>
  </div>
</template>
