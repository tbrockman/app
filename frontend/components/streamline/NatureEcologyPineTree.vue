<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,11a.49.49,0,0,0,.44-.27.49.49,0,0,0,0-.52L9.74,6.39a.25.25,0,0,1,0-.26A.25.25,0,0,1,9.94,6H11a.51.51,0,0,0,.39-.82l-4-5a.53.53,0,0,0-.78,0l-4,5A.51.51,0,0,0,3,6H4.06a.25.25,0,0,1,.22.13.25.25,0,0,1,0,.26L1.59,10.21a.49.49,0,0,0,0,.52A.49.49,0,0,0,2,11H5.75a.25.25,0,0,1,.25.25V13a1,1,0,0,0,2,0V11.25A.25.25,0,0,1,8.25,11Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyPineTree',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
