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
                d="M10.25,9.5h0a1.61,1.61,0,0,1-.44-.06.23.23,0,0,0-.21.05.26.26,0,0,0-.1.2v1.56a.25.25,0,0,1-.25.25H2.75a.25.25,0,0,1-.25-.25V1.75a.25.25,0,0,1,.25-.25H6a.24.24,0,0,0,.23-.17A4.17,4.17,0,0,1,6.72.39a.27.27,0,0,0,0-.26A.25.25,0,0,0,6.51,0H2.75A1.76,1.76,0,0,0,1,1.75v10.5A1.76,1.76,0,0,0,2.75,14h6.5A1.76,1.76,0,0,0,11,12.25V9.69a.26.26,0,0,0-.1-.2.23.23,0,0,0-.21-.05A1.61,1.61,0,0,1,10.25,9.5Z"
            />
            <path
                d="M10.25,0A2.71,2.71,0,0,0,7.5,2.67c0,1.11,1.57,4,2.33,5.11a.51.51,0,0,0,.84,0c.76-1.15,2.33-4,2.33-5.11A2.71,2.71,0,0,0,10.25,0Zm0,3.75a1,1,0,1,1,1-1A1,1,0,0,1,10.25,3.75Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'PhoneTelephoneLocation',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
