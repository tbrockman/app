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
                d="M8.68.11A.77.77,0,0,0,8,.25a.75.75,0,0,0-.29.59V6.29A.75.75,0,0,0,8,6.82l3.85,3.85a.75.75,0,0,0,.53.22h.09a.74.74,0,0,0,.55-.35A7,7,0,0,0,8.68.11Z"
            />
            <path
                d="M7,13.91A7,7,0,0,1,5.32.11.77.77,0,0,1,6,.25a.75.75,0,0,1,.29.59V6.91a.75.75,0,0,0,.22.53l4.29,4.29a.74.74,0,0,1,.21.62.71.71,0,0,1-.35.55A7,7,0,0,1,7,13.91ZM4.75,2.29a.25.25,0,0,0-.37-.22A5.5,5.5,0,0,0,7,12.41a5.57,5.57,0,0,0,1.57-.23A.24.24,0,0,0,8.74,12a.23.23,0,0,0-.07-.23L5.41,8.5h0a2.21,2.21,0,0,1-.66-1.59Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'MoneyGraphPieChart',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
