import React from 'react';

export default function Logo({
  color = '#51459E',
}) {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d="M23.4568 0.0235458C13.1731 0.81564 4.71722 7.25232 1.33867 16.8602C-0.214459 21.277 -0.430217 26.7315 0.765136 31.3569L1.03137 32.3871L15.4739 32.4635L14.9966 31.1361H12.7131L12.7007 30.437C12.6903 29.8451 12.6966 26.0009 12.7091 25.4331C12.7119 25.3017 13.0469 25.2491 13.8806 25.2491C14.9643 25.2491 15.0551 25.2254 15.1456 24.918C15.1991 24.7358 15.4786 24.1022 15.7666 23.5098L16.2903 22.4328L15.8492 20.456C15.4298 18.5762 15.437 18.202 15.8847 18.6049C15.9617 18.6743 16.5922 19.0312 17.2858 19.3982C18.4878 20.0343 18.5621 20.0543 18.8667 19.8243L19.1864 19.5829L18.8227 18.5527C17.7247 15.4417 19.1976 12.0103 22.2537 10.5589C24.7283 9.38371 27.6383 9.89485 29.6496 11.8579C31.4796 13.644 32.0877 16.2696 31.2213 18.6441L30.8659 19.6187L31.6431 20.22C32.0707 20.5509 32.724 21.2051 33.0948 21.674C33.763 22.5185 34.9364 24.6612 34.9364 25.0368C34.9364 25.3666 35.1466 25.3904 36.0282 25.1601C36.495 25.0382 36.9604 24.9588 37.0621 24.9835C37.1817 25.0125 36.9179 25.6262 36.3149 26.7209C35.6935 27.8488 35.3793 28.5853 35.3727 28.9285C35.3632 29.4179 34.8202 31.6526 34.5766 32.2045C34.4683 32.45 34.8397 32.4614 41.7177 32.4252L48.9729 32.3871L49.2392 31.3569C50.2161 27.577 50.2548 22.8985 49.3403 19.1414C46.956 9.34544 38.832 1.85543 28.907 0.302737C27.5695 0.0934542 24.5546 -0.0609324 23.4568 0.0235458ZM23.2019 11.5467C20.8273 12.4279 19.335 14.9023 19.7674 17.2418C19.9757 18.368 20.5041 19.4659 21.1574 20.1301C24.1506 23.1725 29.1557 21.8211 30.1739 17.6957C30.6152 15.9072 30.0388 14.0169 28.6594 12.7296C27.5761 11.7183 26.7197 11.3639 25.225 11.3079C24.2598 11.2718 23.795 11.3266 23.2019 11.5467ZM27.0719 12.4831C27.8435 12.877 28.7266 13.7388 29.101 14.4627C29.4018 15.0445 29.6287 16.3839 29.5447 17.0827C29.4393 17.9605 28.6705 19.4363 28.054 19.9445C27.0566 20.7666 26.3011 21.0376 25.0022 21.0392C24.0084 21.0405 23.705 20.9787 23.0569 20.643C19.3788 18.7372 19.6821 13.6515 23.5603 12.2068C24.4367 11.8804 26.1569 12.0156 27.0719 12.4831ZM24.7814 13.6781C24.7814 13.7897 24.5748 13.9666 24.3221 14.0712C23.6292 14.3582 23.3096 14.7793 23.3096 15.4055C23.3096 15.9967 23.75 16.4861 24.4373 16.6586C24.7706 16.7421 24.8887 17.1607 24.7848 17.8904C24.7352 18.2394 24.6793 18.2404 24.1085 17.9036C23.5953 17.6008 23.5609 17.5983 23.37 17.8486C23.195 18.0782 23.2156 18.1519 23.5347 18.4357C23.7353 18.6142 24.131 18.8038 24.414 18.8569C24.7862 18.9267 24.9286 19.0303 24.9286 19.2313C24.9286 19.5942 25.2291 19.5912 25.3242 19.2275C25.3648 19.0724 25.5738 18.9019 25.7887 18.8487C26.3192 18.7169 26.8418 18.2031 26.8418 17.8131C26.8418 17.0499 26.5416 16.5995 25.8282 16.2927C25.1348 15.9944 25.1286 15.9855 25.1773 15.3693C25.2044 15.0271 25.2547 14.7189 25.2891 14.6845C25.3236 14.6501 25.5544 14.7229 25.802 14.8465C26.2255 15.0577 26.2654 15.0529 26.4674 14.7643C26.7479 14.364 26.6848 14.2877 25.889 14.0649C25.5139 13.96 25.2229 13.7904 25.2229 13.6768C25.2229 13.566 25.1236 13.4752 25.0022 13.4752C24.8807 13.4752 24.7814 13.5664 24.7814 13.6781ZM24.9286 15.2413C24.9286 15.8479 24.7185 16.0026 24.3693 15.6533C24.0261 15.3101 24.2679 14.6526 24.7372 14.6526C24.8623 14.6526 24.9286 14.8564 24.9286 15.2413ZM26.0814 17.5104C26.14 17.8067 25.8549 18.1848 25.5729 18.1848C25.4298 18.1848 25.3701 17.9842 25.3701 17.5045C25.3701 16.8322 25.3739 16.8268 25.7012 17.0439C25.8834 17.1645 26.0545 17.3744 26.0814 17.5104ZM20.7338 22.219C20.2693 22.6836 20.2672 23.1032 20.7275 23.5632L21.0886 23.9246H25.0691C28.8533 23.9246 29.064 23.91 29.3438 23.6302C29.6967 23.2773 29.7216 22.7845 29.409 22.3385C29.1155 21.9195 28.7997 21.9259 28.001 22.367C26.1707 23.3781 23.6408 23.3157 21.7272 22.2122L21.1014 21.8513L20.7338 22.219ZM17.5238 25.8091C17.1064 26.2448 16.9942 26.9322 17.3199 27.0573C17.6093 27.1683 18.4084 26.7845 18.5884 26.4482C18.6759 26.2851 18.7472 25.9816 18.7472 25.774C18.7472 25.4581 18.6795 25.3963 18.3332 25.3963C18.0718 25.3963 17.7735 25.5483 17.5238 25.8091ZM10.0711 36.9473C9.96252 37.8018 9.91366 38.5408 9.96252 38.5896C10.0112 38.6385 10.1534 38.6392 10.2784 38.5913C10.4322 38.5322 10.5054 38.3085 10.5054 37.8985C10.5054 37.23 10.8019 37.1442 10.9496 37.7699C11.0902 38.3659 11.4388 38.1817 11.7363 37.3543C11.889 36.9294 12.068 36.5816 12.1338 36.5816C12.1996 36.5816 12.2967 36.8961 12.3495 37.2807C12.5139 38.4772 12.7123 39.0836 12.9396 39.0836C13.2148 39.0836 13.212 39.0163 12.8602 37.1703C12.6984 36.3206 12.5659 35.6089 12.5659 35.5885C12.5659 35.568 12.4415 35.5514 12.2896 35.5514C12.0979 35.5514 11.9148 35.7805 11.6908 36.3015C11.5133 36.7142 11.3279 37.0115 11.2787 36.9623C11.2295 36.9132 11.085 36.5594 10.9577 36.176C10.8304 35.7926 10.6232 35.4597 10.4974 35.4363C10.3118 35.4017 10.2313 35.6872 10.0711 36.9473ZM26.0515 35.7353C26.0028 35.9175 25.9619 36.2778 25.9608 36.5361C25.9585 37.0608 25.81 37.2169 25.4459 37.0771C25.2437 36.9996 25.2181 36.858 25.2993 36.2672C25.39 35.6074 25.3736 35.5514 25.0896 35.5514C24.8154 35.5514 24.7786 35.6448 24.7564 36.3976C24.7035 38.1868 24.8463 38.9364 25.2398 38.9364C25.3102 38.9364 25.3518 38.6219 25.3321 38.2373C25.3015 37.6371 25.3359 37.5382 25.5748 37.5382C25.8962 37.5382 26.0283 37.7527 26.2021 38.5573C26.2707 38.8749 26.4035 39.1599 26.4973 39.1905C26.6228 39.2316 26.6504 38.786 26.6012 37.5092C26.5644 36.5538 26.5063 35.6894 26.472 35.5882C26.3728 35.2957 26.1483 35.3743 26.0515 35.7353ZM30.2145 35.441C30.1156 35.7359 30.109 38.6232 30.2068 38.7712C30.446 39.1326 30.6342 38.8189 30.5278 38.2367C30.4005 37.5404 30.4704 37.3175 30.816 37.3175C31.0091 37.3175 31.1549 37.5245 31.3268 38.042C31.5523 38.7208 31.9124 39.2131 32.069 39.0565C32.107 39.0185 31.9957 38.5659 31.8218 38.0508L31.5055 37.1142L31.8228 36.9036C32.5662 36.41 31.8771 35.4042 30.7957 35.4042C30.4828 35.4042 30.2213 35.4208 30.2145 35.441ZM36.7953 35.7353C36.7465 35.9175 36.7056 36.2778 36.7046 36.5361C36.7022 37.0627 36.5537 37.2169 36.1846 37.0752C35.9774 36.9957 35.9508 36.857 36.0292 36.2653C36.1156 35.6144 36.0975 35.5514 35.8245 35.5514C35.5605 35.5514 35.5228 35.6511 35.5054 36.3976C35.4741 37.7407 35.5431 38.5537 35.7053 38.7524C36.004 39.1183 36.1314 38.933 36.0327 38.2759C35.9517 37.7343 35.9783 37.5981 36.1808 37.5204C36.5225 37.3893 36.6844 37.5944 36.8921 38.4229C36.9901 38.8142 37.1473 39.1596 37.2411 39.1904C37.3666 39.2316 37.3941 38.786 37.345 37.5092C37.3082 36.5538 37.25 35.6894 37.2157 35.5882C37.1165 35.2957 36.8921 35.3743 36.7953 35.7353ZM17.7538 35.657C17.6328 35.7004 17.5698 36.0438 17.5698 36.6605C17.5698 37.8124 17.3533 38.3477 16.8874 38.3477C16.3122 38.3477 16.0419 37.7482 16.15 36.7129C16.2325 35.9255 16.2144 35.8301 15.9909 35.8731C15.4184 35.9833 15.4541 37.9769 16.0389 38.5618C16.3035 38.8266 16.873 38.8575 17.2977 38.6301C17.7367 38.3952 18.1516 37.355 18.1553 36.4799C18.1585 35.7009 18.0801 35.54 17.7538 35.657ZM19.5839 35.6467C19.5314 35.6993 19.5178 35.8815 19.5539 36.0515C19.7212 36.8427 19.7549 38.124 19.6128 38.2951C19.3932 38.5598 19.583 38.7892 20.0216 38.7892C20.5988 38.7892 21.3964 37.9128 21.3964 37.2785C21.3964 36.6555 20.9363 36.0316 20.2725 35.7543C19.7128 35.5205 19.7106 35.52 19.5839 35.6467ZM23.9766 36.6552C24.0997 37.9672 23.9134 38.1045 23.512 36.9978C23.1845 36.0943 22.9421 35.9542 22.8141 36.5942C22.6443 37.4436 22.7021 38.82 22.9049 38.7533C23.0062 38.72 23.1095 38.4497 23.1345 38.1524C23.1901 37.4941 23.3211 37.4674 23.5838 38.0611C23.7092 38.3443 23.872 38.4934 24.0245 38.4642C24.2182 38.4273 24.275 38.1993 24.3103 37.3176C24.3586 36.1075 24.2704 35.5514 24.0302 35.5514C23.9238 35.5514 23.9066 35.9071 23.9766 36.6552ZM34.5904 35.6631C34.5525 35.7244 34.5788 36.0721 34.649 36.4357C34.9401 37.9456 34.6617 38.2202 34.1716 36.9065C33.9034 36.1877 33.7208 35.9914 33.5612 36.2504C33.5239 36.3112 33.4715 36.8855 33.4448 37.5269C33.4104 38.3561 33.4488 38.7103 33.5777 38.7533C33.6986 38.7936 33.759 38.6406 33.759 38.295C33.759 37.6065 33.9866 37.4972 34.2717 38.0485C34.5226 38.5339 34.8526 38.6313 34.9943 38.262C35.1107 37.9587 35.1091 36.5985 34.9916 36.0113C34.9035 35.5705 34.737 35.426 34.5904 35.6631ZM13.6142 35.8975C13.4431 36.1037 13.3991 38.3341 13.5579 38.7524C13.694 39.1114 15.215 38.7836 15.215 38.3954C15.215 38.2548 15.1204 38.2438 14.8375 38.3514C14.6299 38.4302 14.3277 38.4949 14.166 38.4949C13.9228 38.4949 13.8799 38.412 13.918 38.0171C13.9564 37.619 14.0356 37.5272 14.3935 37.4652C15.0212 37.3568 15.0633 37.0231 14.4491 37.0231C14.0035 37.0231 13.9496 36.9782 13.9195 36.5816C13.8861 36.1432 13.9195 36.1168 14.5528 36.0824C15.1194 36.0518 14.9932 35.772 14.3929 35.728C14.0016 35.6994 13.7295 35.7586 13.6142 35.8975ZM21.784 36.1515C21.6654 36.7449 21.6629 38.251 21.7801 38.5564C21.8292 38.6844 21.9617 38.7892 22.0744 38.7892C22.2328 38.7892 22.2844 38.4881 22.3015 37.4646C22.3137 36.7361 22.3302 36.0582 22.3383 35.9582C22.3464 35.8581 22.246 35.7555 22.1152 35.7303C21.9505 35.6987 21.8488 35.8279 21.784 36.1515ZM27.1499 35.9027C27.034 36.0423 26.9786 36.5371 26.9965 37.2714C27.0326 38.7418 27.0875 38.9364 27.4667 38.9364C27.9577 38.9364 28.7551 38.6016 28.7551 38.3954C28.7551 38.2548 28.6605 38.2438 28.3776 38.3514C28.1699 38.4302 27.8678 38.4949 27.706 38.4949C27.4629 38.4949 27.4199 38.412 27.4581 38.0171C27.4965 37.619 27.5756 37.5272 27.9336 37.4652C28.5803 37.3535 28.5985 37.0231 27.9579 37.0231C27.4969 37.0231 27.4305 36.9779 27.4305 36.6639C27.4305 36.2643 27.6498 36.0665 28.0928 36.0665C28.2547 36.0665 28.4203 36.0002 28.4608 35.9193C28.5851 35.6706 27.3555 35.655 27.1499 35.9027ZM29.1428 36.1515C29.0241 36.7449 29.0216 38.251 29.1388 38.5564C29.1879 38.6844 29.3204 38.7892 29.4331 38.7892C29.5915 38.7892 29.6432 38.4881 29.6602 37.4646C29.6724 36.7361 29.6889 36.0582 29.697 35.9582C29.7051 35.8581 29.6047 35.7555 29.4739 35.7303C29.3092 35.6987 29.2075 35.8279 29.1428 36.1515ZM32.5291 36.0226C32.4118 36.4605 32.408 38.2547 32.5238 38.5564C32.573 38.6844 32.7054 38.7892 32.8182 38.7892C32.979 38.7892 33.0232 38.4879 33.0232 37.391C33.0232 36.6221 33.0267 35.9433 33.031 35.8825C33.0508 35.5998 32.6093 35.723 32.5291 36.0226ZM31.5414 36.0908L31.8914 36.3359L31.5579 36.6059C31.3745 36.7544 31.0585 36.8759 30.8557 36.8759C30.545 36.8759 30.5009 36.8237 30.5757 36.5448C30.6244 36.3626 30.6653 36.1309 30.6663 36.0297C30.6693 35.7695 31.1284 35.8016 31.5414 36.0908ZM20.8738 36.7626C21.1803 37.2003 21.1613 37.4969 20.7969 37.9599C20.2508 38.6544 20.0718 38.4765 20.0718 37.2387C20.0718 36.1851 20.0861 36.1374 20.3586 36.2833C20.5164 36.3676 20.7482 36.5834 20.8738 36.7626ZM38.6729 36.4315C38.2502 36.6022 37.7317 37.2879 37.7375 37.6685C37.7432 38.0476 37.9905 38.3882 38.4305 38.6225C38.8788 38.8613 39.5405 38.5162 39.7903 37.9131C40.0076 37.3885 39.79 36.669 39.3412 36.4288C39.0388 36.2669 39.0804 36.2668 38.6729 36.4315ZM39.153 36.9885C39.5143 37.2194 39.4476 37.9917 39.0479 38.2055C38.4416 38.53 38.0339 37.6259 38.5527 37.1071C38.8102 36.8497 38.906 36.8308 39.153 36.9885ZM7.51383 42.9002C11.4206 46.6735 15.8261 48.8922 21.1709 49.778C22.8084 50.0494 26.7485 50.0782 28.4608 49.8316C33.8325 49.0573 38.5848 46.7076 42.5159 42.8823L43.8405 41.5935L6.1638 41.5964L7.51383 42.9002Z" />
    </svg>
  );
}
