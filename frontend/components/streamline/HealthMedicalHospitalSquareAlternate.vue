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
                d="M11.25,0H2.75A2.75,2.75,0,0,0,0,2.75v8.5A2.75,2.75,0,0,0,2.75,14h8.5A2.75,2.75,0,0,0,14,11.25V2.75A2.75,2.75,0,0,0,11.25,0ZM12.5,11.25a1.25,1.25,0,0,1-1.25,1.25H2.75A1.25,1.25,0,0,1,1.5,11.25V2.75A1.25,1.25,0,0,1,2.75,1.5h8.5A1.25,1.25,0,0,1,12.5,2.75Z"
            />
            <path
                d="M9,3.5a1,1,0,0,0-1,1V5.75A.25.25,0,0,1,7.75,6H6.25A.25.25,0,0,1,6,5.75V4.5a1,1,0,0,0-2,0v5a1,1,0,0,0,2,0V8.25A.25.25,0,0,1,6.25,8h1.5A.25.25,0,0,1,8,8.25V9.5a1,1,0,0,0,2,0v-5A1,1,0,0,0,9,3.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'HealthMedicalHospitalSquareAlternate',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
