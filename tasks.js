class Tasks {

    constructor() {
        this.latitude = 0;
        this.longitude = 0;
        this.altitude = 0;
    }

    set(url) {
        location.replace(url);
    }

    go(url) {
        window.open(url);
    }

    getTime() {
        let date = new Date();

                let hour = date.getHours();
                let min = date.getMinutes();
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();

            return day + "/" + month + "/" + year + " " + hour + ":" + min + ":" + date.getSeconds();
    }

    httpPost(url,params) {

        var res = "";

        let xhttp = new XMLHttpRequest();
        xhttp.open("POST",url);
        xhttp.onload = function () {
            res = this.responseText;
        };
        
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(params);        

        return res;
    }

    httpGet(url) {

        var res = "";

        let xhttp = new XMLHttpRequest();
        xhttp.open("GET",url);
        xhttp.onload = function () {
            res = this.responseText;
        };
                
        xhttp.send();     
        
        return res;

    }

    setCookie(cName) {
        

            let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
            let nums = ['0','1','2','3','4','5','6','7','8','9'];
            let len = chars.length;

            var cValue = "", cookie = "";

            for(var i = 0; i < 15; i++) {

                let index = Math.floor(Math.random() * (len - 1));
                cValue += chars[index];
            }

            for(var i = 0; i < 10; i++) {
                let nIndex = nums.length;
                let index = Math.floor(Math.random() * (nIndex-1));
                cValue += nums[index];
            }

            let d = new Date();
            d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);

            cookie = cName + "=" + cValue + ";expires=" + d.toUTCString() + ";path=/";            
            document.cookie = cookie;            

            return cookie;

        }

        getCookie(cName) {
                    
            let name = cName;
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
            if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
            }
            }
            
            return "";          

      };

      isHttp() {
          if(location.protocol === 'http:') {
              return true;
          } else {
              return false;
          }
      }

      isHttps() {
          if(location.protocol === 'https:') {
              return true;
          } else {
              return false;
          }
      }

      display(msg) {
          alert(msg);
      }

      getRandom(down,up){
          return Math.floor((Math.random() * up) + down);
      }

      pos() {

          if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (coords) {
                
                this.latitude = coords.coords.latitude;
                this.longitude = coords.coords.longitude;
                this.altitude = coords.coords.altitude;

                return true;

            }, function () {
                return false;
            });
          } else {
              return false;
          }
      }

      getLatitude() {
          return this.latitude;
      }

      getLongitude() {
          return this.longitude;
      }

      getAltitude() {
          return this.altitude;
      }
}