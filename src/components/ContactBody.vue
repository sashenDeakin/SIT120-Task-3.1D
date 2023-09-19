<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const number = ref("");
const message = ref("");

const submitData = async () => {
  const response = await fetch(`http://localhost:3001/save/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      number: number.value,
      message: message.value,
    }),
  });

  const data = await response.json();

  alert("Your Message Send Successful");
};
</script>

<template>
  <div class="contact_us_6" id="#app">
    <div class="responsive-container-block container">
      <form class="form-box">
        <div class="container-block form-wrapper">
          <div class="mob-text">
            <p class="text-blk contactus-head">Get in Touch</p>
            <p class="text-blk contactus-subhead">
              Thank you for reaching out to us. We value your feedback,
              inquiries, and suggestions. Please use the form below to get in
              touch with us, and we will respond as soon as possible.
            </p>
          </div>
          <div class="responsive-container-block" id="i2cbk">
            <div
              class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
              id="i10mt-3"
            >
              <p class="text-blk input-title">FIRST NAME</p>
              <input
                class="input"
                id="name"
                name="FirstName"
                placeholder="Please enter first name..."
                v-model="name"
              />
            </div>
            <div
              class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
              id="ip1yp"
            >
              <p class="text-blk input-title">EMAIL</p>
              <input
                class="input"
                id="ipmgh-3"
                name="Email"
                placeholder="Please enter email..."
                v-model="email"
              />
            </div>
            <div
              class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
              id="ih9wi"
            >
              <p class="text-blk input-title">PHONE NUMBER</p>
              <input
                class="input"
                id="imgis-3"
                name="PhoneNumber"
                placeholder="Please enter phone number..."
                v-model="number"
              />
            </div>
            <div
              class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
              id="i634i-3"
            >
              <p class="text-blk input-title">WHAT DO YOU HAVE IN MIND ?</p>
              <textarea
                class="textinput"
                placeholder="Please enter query..."
                v-model="message"
              ></textarea>
            </div>
          </div>
          <button
            class="submit-btn"
            style="cursor: pointer"
            @click="submitData()"
          >
            Submit
          </button>
        </div>
      </form>
      <div
        class="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12"
        id="i772w"
      >
        <div class="map-part">
          <p class="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
            Reach us at
          </p>
          <p class="text-blk map-contactus-subhead">
            Thank you for reaching out to us. We value your feedback, inquiries,
            and suggestions. Please use the form below to get in touch with us,
            and we will respond as soon as possible.
          </p>
          <div class="social-media-links mob">
            <a class="social-icon-link" href="#" id="ix94i-2-2">
              <img
                class="link-img image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
              />
            </a>
            <a class="social-icon-link" href="#" id="itixd">
              <img
                class="link-img image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
              />
            </a>
            <a class="social-icon-link" href="#" id="izxvt">
              <img
                class="link-img image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
              />
            </a>
            <a class="social-icon-link" href="#" id="izldf-2-2">
              <img
                class="link-img image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
              />
            </a>
          </div>
          <div class="map-box container-block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.450036460289!2d145.21899377660728!3d-37.966625471937796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad614266b269e03%3A0xc54ff76196741218!2s10%20Fraser%20St%2C%20Dandenong%20North%20VIC%203175!5e0!3m2!1sen!2sau!4v1695100294152!5m2!1sen!2sau"
              width="720"
              height="500"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact_us_6 * {
  font-family: Nunito, sans-serif;
}

.contact_us_6 .text-blk {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  line-height: 25px;
}

.contact_us_6 .responsive-cell-block {
  min-height: 75px;
}

.contact_us_6 input:focus,
.contact_us_6 textarea:focus {
  outline-color: initial;
  outline-style: none;
  outline-width: initial;
}

.contact_us_6 .container-block {
  min-height: 75px;
  width: 100%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: block;
}

.contact_us_6 .responsive-container-block {
  min-height: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
}

.contact_us_6 .responsive-container-block.big-container {
  padding-top: 10px;
  padding-right: 30px;
  width: 35%;
  padding-bottom: 10px;
  padding-left: 30px;
  background-color: #03a9f4;
  position: absolute;
  height: 950px;
  right: 0px;
}

.contact_us_6 .responsive-container-block.container {
  position: relative;
  min-height: 75px;
  flex-direction: row;
  z-index: 2;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  padding-right: 30px;
  padding-bottom: 0px;
  padding-left: 30px;
  max-width: 1320px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}

.contact_us_6 .container-block.form-wrapper {
  background-color: white;
  max-width: 450px;
  text-align: center;
  padding-top: 50px;
  padding-right: 40px;
  padding-bottom: 50px;
  padding-left: 40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 20px 7px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-top: 90px;
  margin-right: 0px;
  margin-bottom: 60px;
  margin-left: 0px;
}

.contact_us_6 .text-blk.contactus-head {
  font-size: 36px;
  line-height: 52px;
  font-weight: 900;
}

.contact_us_6 .text-blk.contactus-subhead {
  color: #9c9c9c;
  width: 300px;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: auto;
  display: none;
}

.contact_us_6
  .responsive-cell-block.wk-desk-6.wk-ipadp-6.wk-tab-12.wk-mobile-12 {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 26px;
  margin-left: 0px;
  min-height: 50px;
}

.contact_us_6 .input {
  width: 100%;
  height: 50px;
  padding-top: 1px;
  padding-right: 15px;
  padding-bottom: 1px;
  padding-left: 15px;
  border-top-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: #eeeeee;
  border-right-color: #eeeeee;
  border-bottom-color: #eeeeee;
  border-left-color: #eeeeee;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  font-size: 16px;
  color: black;
}

.contact_us_6 .textinput {
  width: 98%;
  min-height: 150px;
  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
  border-top-width: 2px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid;
  border-top-color: #eeeeee;
  border-right-color: #eeeeee;
  border-bottom-color: #eeeeee;
  border-left-color: #eeeeee;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  font-size: 16px;
}

.contact_us_6 .submit-btn {
  width: 98%;
  background-color: #03a9f4;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-top-style: outset;
  border-right-style: outset;
  border-bottom-style: outset;
  border-left-style: outset;
  border-top-color: #767676;
  border-right-color: #767676;
  border-bottom-color: #767676;
  border-left-color: #767676;
  border-image-source: initial;
  border-image-slice: initial;
  border-image-width: initial;
  border-image-outset: initial;
  border-image-repeat: initial;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
}

.contact_us_6 .form-box {
  z-index: 2;
  margin-top: 0px;
  margin-right: 48px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.contact_us_6 .text-blk.input-title {
  text-align: left;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 10px;
  font-size: 14px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 5px;
  margin-left: 0px;
  color: #9c9c9c;
}

.contact_us_6 ::placeholder {
  color: #dadada;
}

.contact_us_6 .mob-text {
  display: block;
  text-align: left;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 25px;
  margin-left: 0px;
}

.contact_us_6
  .responsive-cell-block.wk-tab-12.wk-mobile-12.wk-desk-12.wk-ipadp-12 {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 20px;
  margin-left: 0px;
}

.contact_us_6 .text-blk.contactus-subhead.color {
  color: white;
}

.contact_us_6 .map-box {
  max-width: 800px;
  max-height: 520px;
  width: 100%;
  height: 520px;
  background-color: #d9d9d9;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
}

.contact_us_6 .map-part {
  width: 100%;
  height: 100%;
}

.contact_us_6 .text-blk.map-contactus-head {
  font-weight: 900;
  font-size: 22px;
  line-height: 32px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 10px;
  margin-left: 0px;
  color: #03a9f4;
}

.contact_us_6 .text-blk.map-contactus-subhead {
  max-width: 300px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 20px;
  margin-left: 0px;
}

.contact_us_6 .social-media-links.mob {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 30px;
  margin-left: 0px;
  width: 230px;
  display: flex;
  justify-content: flex-start;
}

.contact_us_6 .link-img {
  width: 30px;
  height: 30px;
  margin-top: 0px;
  margin-right: 25px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.contact_us_6 .link-img.image-block {
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.contact_us_6 .social-icon-link {
  margin: 0 25px 0 0;
  padding: 0 0 0 0;
}

@media (max-width: 1024px) {
  .contact_us_6 .responsive-container-block.container {
    justify-content: center;
  }

  .contact_us_6 .map-box {
    position: absolute;
    top: 0px;
    max-height: 320px;
  }

  .contact_us_6 .map-box {
    max-width: 100%;
    width: 100%;
  }

  .contact_us_6 .responsive-container-block.container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .contact_us_6 .map-part {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact_us_6 .container-block.form-wrapper {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6 .mob-text {
    display: block;
  }

  .contact_us_6 .form-box {
    margin-top: 200px;
    margin-right: 60px;
    margin-bottom: 40px;
    margin-left: 0px;
  }

  .contact_us_6 .link-img {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    display: flex;
    justify-content: space-evenly;
  }

  .contact_us_6 .social-media-links.mob {
    justify-content: space-evenly;
  }

  .contact_us_6
    .responsive-cell-block.wk-desk-7.wk-ipadp-12.wk-tab-12.wk-mobile-12 {
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
  }

  .contact_us_6 .text-blk.contactus-subhead {
    display: block;
  }

  .contact_us_6 .mob-text {
    text-align: center;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6 .responsive-container-block.container {
    flex-wrap: wrap;
  }

  .contact_us_6 .form-box {
    margin-top: 200px;
    margin-right: 0px;
    margin-bottom: 40px;
    margin-left: 0px;
  }
}

@media (max-width: 768px) {
  .contact_us_6 .submit-btn {
    width: 100%;
  }

  .contact_us_6 .input {
    width: 100%;
  }

  .contact_us_6 .textinput {
    width: 100%;
  }

  .contact_us_6 .container-block.form-wrapper {
    margin-top: 80px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6 .text-blk.input-title {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .contact_us_6 .form-box {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;
  }

  .contact_us_6 .container-block.form-wrapper {
    padding-top: 50px;
    padding-right: 15px;
    padding-bottom: 50px;
    padding-left: 15px;
  }

  .contact_us_6 .mob-text {
    display: block;
  }

  .contact_us_6 .responsive-container-block.container {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }

  .contact_us_6 .form-box {
    margin-top: 200px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6 .container-block.form-wrapper {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6 .form-box {
    margin-top: 220px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6 .form-box {
    margin-top: 220px;
    margin-right: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
  }

  .contact_us_6 .text-blk.contactus-head {
    font-size: 32px;
    line-height: 40px;
  }
}

@media (max-width: 500px) {
  .contact_us_6 .container-block.form-wrapper {
    padding-top: 50px;
    padding-right: 15px;
    padding-bottom: 50px;
    padding-left: 15px;
  }

  .contact_us_6 .container-block.form-wrapper {
    margin-top: 60px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
  }

  .contact_us_6
    .responsive-cell-block.wk-ipadp-6.wk-tab-12.wk-mobile-12.wk-desk-6 {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 15px;
    margin-left: 0px;
  }

  .contact_us_6 .responsive-container-block {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 35px;
    margin-left: 0px;
  }

  .contact_us_6 .text-blk.input-title {
    font-size: 12px;
  }

  .contact_us_6 .text-blk.contactus-head {
    font-size: 26px;
    line-height: 35px;
  }

  .contact_us_6 .input {
    height: 45px;
  }
}
</style>
