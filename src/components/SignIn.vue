<template>

  <div class="h-screen w-screen bg-white border border-[#DBDBDB] overflow-auto box-border">
    <div class=" flex-col lg:flex-row justify-center lg:space-x-22 p-5 lg:p-20 flex items-center ">
      <div class="leftbody w-1/2">
        <img class="image w-full h-auto" src="../assets/left-image.png" />
      </div>

      <div class="rightbody w-1/2">
        <div class="heading font-[volkhov] pt-12 text-5xl leading-[100%] tracking-[0%] text-left">FASCO</div>

        <div class="template mt-9">
          <div class="heaing2 font-[volkhov] text-2xl leading-[40px] tracking-[0%] text-start">Sign In To FASCO</div>

          <div class="flex mt-6">
            <div class="google-icon border-[1px] rounded-lg flex items-center px-5 border-[#5B86E5]">
              <img src="../assets/google-image.png" class="" />
              <div class=" ml-7 text-sm font-[poppins]" >Sign up with Google</div>
            </div>

            <div class="gmail-icon py-1 border-[1px] rounded-lg ml-16 flex items-center px-5 border-[#5B86E5] ">
              <img src="../assets/gmail-image.png" />
              <div class="ml-7 text-sm  font-[poppins]">Sign up with Email</div>
            </div>
          </div>

          <div class="main-or flex ml-49 mt-11 items-center">
            <div class="w-8 h-1 bg-[#838383] mr-4 " ></div>
            <span class="or font-[Poppins] font-bold text-2xl leading-[40px] tracking-[8%] text-[#838383]">OR</span>
            <div class="right w-8 h-1 bg-[#838383] ml-4"></div>
          </div>

          <div class="input flex pr-22 flex-col">
            <input type="text" placeholder="Email" class=" h-12 border-b text-[#9D9D9D] focus:outline-none rotate-0 font-[poppins] text-sm leading-[40px] tracking-[8%]"  />

            <input type="text" placeholder="Password" class=" h-12 border-b text-[#9D9D9D] focus:outline-none rotate-0 font-[poppins] text-sm leading-[40px] tracking-[8%]" />
          </div>

          <div class="btn flex flex-col mt-8 px-20 space-y-3 ">
            <button class="btn-sign py-3 rounded-lg bg-black text-white shadow-lg border border-[#5B86E5] font-[poppins] font-semibold text-base cursor-pointer">Sign In</button>
            <button class="btn-registor py-3 border rounded-lg border-[#5B86E5] font-[poppins] font-semibold text-base text-[#5B86E5] cursor-pointer">Registor Now</button>
          </div>

         
        </div>

        <div class="text-password font-[poppins] font-bold text-base leading-[40px] tracking-[8%] text-[#5B86E5] ml-65">Forget Password?</div>

        <div class="bottom-text font-[poppins] leading-[40px] tracking-[0] text-sm text-[#000000] ml-93 mt-8">FASCO Terms & Codnitions</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

