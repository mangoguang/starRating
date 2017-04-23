<template>
    <div class="load">      
        <!-- 加载动画 -->
      <div class="animate">
        <div id="rect" class="rect">
          <div class="point" style="text-align: center;line-height: 50px;">

          </div>
        </div>
      </div>
    </div>
</template>

<style lang="less" scoped>
    @import "../less/variable";
/* ------加载动画------ */

.animate {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  box-sizing: border-box;
  padding-top: 150px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}

#rect {
  width: 50px;
  height: 50px;
  background: #121416;
  margin: 0 150px;
  border-radius: 25px;
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  margin-top: -25px;
  margin-left: -25px;
}

div.rect {
  .point {
    width: 6px;
    height: 6px;
    background: @fc;
    margin: 0 auto;
    border-radius: 50%;
  }
  position: relative;
  animation: mymove 1s linear infinite;
  -webkit-animation: mymove 1s linear infinite;
  -moz-animation: mymove 1s linear infinite;
  -o-animation: mymove 1s linear infinite;
  -ms-animation: mymove 1s linear infinite;
}

@keyframes mymove {
  0% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
  }
}


@-webkit-keyframes mymove {
  0% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
  }
}


@-moz-keyframes mymove {
  0% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
  }
}


@-o-keyframes mymove {
  0% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
  }
}


@-ms-keyframes mymove {
  0% {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
    -moz-transform: rotateZ(0deg);
    -o-transform: rotateZ(0deg);
    -ms-transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
  }
}
</style>
