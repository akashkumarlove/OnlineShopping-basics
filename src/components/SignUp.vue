<template>

  <div class="wrapper w-screen h-screen box-border overflow-auto ">
    <div class="flex flex-col items-center lg:items-start lg:flex-row lg:space-y-0 lg:space-x-18 m-0 lg:m-20 border border-[#DBDBDB]">

      <div class="left w-1/2">
        <img src="../assets/left-image1.png"/>
      </div>

      <div class="right w-1/2 text-left">

        <div class="heading font-[Volkhov] text-4xl mt-10 text-[#484848] leading-[100%] tracking-[0]">FASCO</div>
        <div class="sub-heading mt-9 font-[Volkhov] font-normal text-xl leading-[40px] tracking-[0]">Create Account</div>

        <div class="icons flex mt-5 space-x-9 ">
            <div class="googel-icon space-x-5 w-full max-w-61 py-2 border-[#5B86E5] border-solid border-[1px] px-5 rounded-[8px] flex items-center">
              <img class="" src="../assets/google-image.png"/>
              <div class="text">Sign up with Google</div>
            </div>

            <div class=" items-center gmail-icon space-x-5 w-full max-w-61 px-4 border-[#5B86E5] border-solid border-[1px] rounded-[8px] flex">
              <img src="../assets//gmail-image.png"/>
              <div class="text">Sign up with Email</div>
            </div>
        </div>

        <div class="main-or flex items-center ml-51 mt-10">
           <div class="left w-7 h-1 bg-[#838383] mr-3  "></div>
           <div class="or font-[Poppins] font-bold text-2xl leading-[40px] tracking-[8%] text-[#838383]">OR</div>
           <div class="right w-7 h-1 bg-[#838383] ml-3 "></div>
        </div>

        <div class="input mt-8">
          <div class="in-1 space-x-6">
           <input placeholder="First Name" type="text" class=" focus:outline-none border-b w-65 h-10 border-[#9D9D9D]"/>
           <input placeholder="Last Name" type="text" class=" focus:outline-none border-b w-65 h-10 border-[#9D9D9D]"/>
          </div>

          <div class="in-2 space-x-6 mt-2">
           <input placeholder="Email Address" type="text" class=" focus:outline-none border-b w-65 h-10 border-[#9D9D9D]"/>
           <input placeholder="Phone Number" type="text" class=" focus:outline-none border-b w-65 h-10 border-[#9D9D9D]"/>
          </div>

          <div class="in-3 space-x-6 mt-2">
           <input placeholder="Password" type="text" class=" focus:outline-none border-b w-65 h-10 border-[#9D9D9D]"/>
           <input placeholder="Confirm Password" type="text" class=" focus:outline-none border-b w-65 h-10 border-[#9D9D9D]"/>
          </div>

        </div>

        <div class="button px-8 mt-8">
          <button class="w-full max-w-120 py-3 rounded-[10px] shadow-l bg-[#000000] text-white">Create Account</button>
        </div>

        <div class=" text-center sub-bottom font-[Poppins] leading-[40px] tracking-[8%]">Already have an account?<span class=" mr-7 font-family: Poppins;
font-weight: 400;
font-size: 16px;
line-height: 40px;
letter-spacing: 8%;
text-[#5B86E5]
">Login</span></div>

        <div class="bottom font-[Poppins] text-right m leading-[40px] mt-10 mr-5 tracking-[0]">FASCO Terms & Codnitions</div>

      </div>

    </div>
  </div>
</template>



<script>
export default{
   name: "SignUp"
}

</script>