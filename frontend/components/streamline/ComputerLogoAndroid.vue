<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <g>
            <path
                d="M14,9.25A2.75,2.75,0,0,0,11.25,6.5H2.75A2.75,2.75,0,0,0,0,9.25v.5a.76.76,0,0,0,.75.75.76.76,0,0,0,.75-.75v-.5A1.25,1.25,0,0,1,2.75,8,.25.25,0,0,1,3,8.25V10.5a1.49,1.49,0,0,0,.86,1.35.27.27,0,0,1,.14.23v1.17a.75.75,0,0,0,1.5,0v-1A.25.25,0,0,1,5.75,12h2.5a.25.25,0,0,1,.25.25v1a.75.75,0,0,0,1.5,0V12.08a.27.27,0,0,1,.14-.23A1.49,1.49,0,0,0,11,10.5V8.25A.25.25,0,0,1,11.25,8,1.25,1.25,0,0,1,12.5,9.25v.5a.75.75,0,0,0,1.5,0Z"
            />
            <path
                d="M10.78,1.28A.75.75,0,0,0,9.72.22l-1,1a.24.24,0,0,1-.27.05,4,4,0,0,0-2.9,0,.24.24,0,0,1-.27-.05l-1-1A.75.75,0,0,0,3.22,1.28L4,2a.24.24,0,0,1,0,.34A4,4,0,0,0,3,5a.5.5,0,0,0,.5.5h7A.5.5,0,0,0,11,5a4,4,0,0,0-1-2.63A.24.24,0,0,1,10,2Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerLogoAndroid',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
