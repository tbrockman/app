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
                d="M11.53,5.5a.24.24,0,0,0,.25-.23,29.17,29.17,0,0,0,0-3.78,1.58,1.58,0,0,0-2-1.42C7.3.76,3,2.34,1.06,5.08S.15,10.61.94,12.23a.28.28,0,0,0,.24.15.29.29,0,0,0,.25-.14C3.76,7.89,8,3.7,8.27,4c.08.07-.12.5-.51,1.17a.25.25,0,0,0,0,.25A.24.24,0,0,0,8,5.5h3.55Z"
            />
            <path
                d="M6,8.89a.25.25,0,0,0-.18-.24.24.24,0,0,0-.28.11c-1,1.53-2,3.23-2.81,4.75a.28.28,0,0,0,0,.25.26.26,0,0,0,.2.15,8.83,8.83,0,0,0,1.5.09,8.23,8.23,0,0,0,2.68-.43.25.25,0,0,0,.16-.16.25.25,0,0,0,0-.22A6.29,6.29,0,0,1,6,9.49Z"
            />
            <path
                d="M14,7.5a.5.5,0,0,0-.5-.5H8a.5.5,0,0,0-.5.5v2a4.49,4.49,0,0,0,.06.73,4.79,4.79,0,0,0,3,3.75l.18,0,.18,0a4.81,4.81,0,0,0,1.78-1.21,4.76,4.76,0,0,0,.81-1.18,4.89,4.89,0,0,0,.42-1.36A4.49,4.49,0,0,0,14,9.49Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyLeafProtect',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
