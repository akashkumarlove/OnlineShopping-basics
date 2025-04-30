<template>

  <div class="wrapper h-screen w-screen overflow-auto box-border bg-white border border-[#DBDBDB]">
    <div class="flex flex-col items-center lg:flex-row justify-center lg:space-x-26 p-5 lg:p-22">
      <div class="left w-1/2">
        <img class="w-full h-auto" src="../assets/left-image.png" />
      </div>

      <div class="right text-left w-1/2">
        <div class="pt-12 heading font-[Volkhov] text-5xl leading-[100%] tracking-[0%]">
          FASCO
        </div>

        <div class="pt-27 sub-heading font-[Volkhov] text-xl leading-[40px] tracking-[0%]">
          Forget Password
        </div>

        <div class="input pt-8">
          <div class="flex ">
            <input class="w-69 mr-6 h-11 font-[poppins] border-b focus:outline-none border-[#9D9D9D]" type="text"
              placeholder="First Name" />
            <input class="w-69 h-11 border-b font-[poppins] focus:outline-none border-[#9D9D9D]" type="text"
              placeholder="Last Name" />
          </div>

          <div class="pt-4 flex">
            <input class="w-69 mr-6 h-11 font-[poppins] border-b focus:outline-none border-[#9D9D9D]" type="text"
              placeholder="Email Addres" />
            <input class="w-69 h-11 border-b font[poppins] focus:outline-none border-[#9D9D9D]" type="text"
              placeholder="Phone Number" />
          </div>
        </div>

        <div class="pt-9 flex flex-col px-8 ">
          <button
            class="bg-black text-white button font-[poppins] ml-11 py-3 rounded-[10px] shadow-lg">
            Send Confirmation Code
          </button>
        </div>

        <div class="leading-[40px] tracking-[8%] font-[Poppins] text-center">
          Already have an account?
          <span class="leading-[40px] tracking-[8%] font-[Poppins] text-[#5B86E5]">Login</span>
        </div>
        <div class=" text-right mt-28 font-[Poppins] leading-[40px] tracking-[0]">
          FASCO Terms & Codnitions
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgetPassword",
};
</script>
