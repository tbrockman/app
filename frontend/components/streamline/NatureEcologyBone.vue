<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.88,2.15a0,0,0,0,1,0,0A2.16,2.16,0,1,0,8,3.51a.25.25,0,0,1,0,.33L3.84,8a.25.25,0,0,1-.33,0,2.15,2.15,0,1,0-1.39,3.83,0,0,0,0,1,0,0A2.16,2.16,0,1,0,6,10.49a.25.25,0,0,1,0-.33L10.16,6a.25.25,0,0,1,.33,0,2.15,2.15,0,1,0,1.39-3.83Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyBone',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
