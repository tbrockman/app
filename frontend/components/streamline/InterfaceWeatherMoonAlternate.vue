<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7.45,14A7,7,0,0,1,6.34,0a1,1,0,0,1,1,.44,1,1,0,0,1,0,1.08,5,5,0,0,0,4.29,7.68,4.79,4.79,0,0,0,.79-.07,1,1,0,0,1,1,1.52A7,7,0,0,1,7.45,14ZM4.65,3.29A.26.26,0,0,0,4.52,3a.24.24,0,0,0-.28,0,5,5,0,0,0,5.57,8.35.26.26,0,0,0,.13-.25A.25.25,0,0,0,9.76,11,7.06,7.06,0,0,1,4.59,4.17,6.51,6.51,0,0,1,4.65,3.29Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceWeatherMoonAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
