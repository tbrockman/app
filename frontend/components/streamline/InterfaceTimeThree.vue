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
                d="M7,0a.5.5,0,0,0-.5.5V7a.5.5,0,0,0,.5.5h6.5A.5.5,0,0,0,14,7,7,7,0,0,0,7,0Z"
            />
            <path
                d="M2.25,7.75H.75a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Z"
            />
            <path
                d="M3.18,4.24,2.12,3.18A.75.75,0,0,1,3.18,2.12L4.24,3.18A.75.75,0,0,1,3.18,4.24Z"
            />
            <path
                d="M2.12,11.88a.75.75,0,0,1,0-1.06L3.18,9.75a.75.75,0,0,1,1.06,1.07L3.18,11.88A.75.75,0,0,1,2.12,11.88Z"
            />
            <path
                d="M7,14a.76.76,0,0,1-.75-.75v-1.5a.75.75,0,0,1,1.5,0v1.5A.76.76,0,0,1,7,14Z"
            />
            <path
                d="M10.82,11.88,9.76,10.82a.75.75,0,1,1,1.06-1.06l1.06,1.06a.75.75,0,1,1-1.06,1.06Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceTimeThree',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
