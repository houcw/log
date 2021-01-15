this.roomIndex = k;
      let parentOrderNo = "";
      //多间房
      if (parseInt(this.orderInfo.roomCount) > 1) {
        parentOrderNo = this.oldorderNo;
        if(window.localStorage.getItem('orderNo')||window.localStorage.getItem('parentOrderNo')){
          this.orderInfo.orderNo = window.localStorage.getItem('orderNo')
          this.orderInfo.parentOrderNo = window.localStorage.getItem('parentOrderNo')
        }
        // this.orderInfo.orderNo = this.roomInfo[this.roomIndex].orderNo
      }
      //有父订单
      if (this.orderInfo.parentOrderNo !== "--") {
        parentOrderNo = this.orderInfo.parentOrderNo;
        if(window.localStorage.getItem('orderNo')||window.localStorage.getItem('parentOrderNo')){
          this.orderInfo.orderNo = window.localStorage.getItem('orderNo')
          parentOrderNo = window.localStorage.getItem('parentOrderNo')
        }
      }
      // 点击房间
      if(k!=-1&&parseInt(this.orderInfo.roomCount) > 1){
        this.orderInfo.orderNo = this.roomInfo[this.roomIndex].orderNo
        this.getOrderFn(this.roomInfo[k].orderNo)
      }

      let obj = {
        orderNo: "",
        orderType: 0
      };
      if (k === -1) {
        // 点击多间房标题时
        this.orderInfo.orderNo = this.oldorderNo
        //多间房
        obj.orderType = 1;
        obj.orderNo = this.orderInfo.orderNo;
        obj.parentOrderNo = this.oldorderNo;
        if(window.localStorage.getItem('orderNo')||window.localStorage.getItem('parentOrderNo')){
          this.orderInfo.orderNo = window.localStorage.getItem('orderNo')
          obj.orderNo = window.localStorage.getItem('orderNo')
          parentOrderNo = window.localStorage.getItem('parentOrderNo')
        }
      } else {
        // console.log(this.orderInfo)
        // console.log(this.orderInfo.parentOrderNo)
        //单间房
        obj.orderType = 3;
        obj.parentOrderNo = "";
        if (this.orderInfo.isRenewal === "Y") {
          obj.orderType = 4;
          obj.parentOrderNo = this.oldorderNo;
        } else if (this.orderInfo.parentOrderNo == "" || this.orderInfo.parentOrderNo=='--') {
          obj.orderType = 2;
          obj.parentOrderNo = this.oldorderNo;
        }
        obj.orderNo = this.roomInfo[k].orderNo;
      }