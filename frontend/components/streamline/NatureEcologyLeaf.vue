<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M4.65,4c.29-.26,4.51,3.93,6.84,8.28a.29.29,0,0,0,.25.14.28.28,0,0,0,.24-.15c.79-1.62,1.7-4.53-.12-7.15S5.62.76,3.21.07a1.58,1.58,0,0,0-2,1.42C1,4,.94,8.61,2.84,11.34A6.59,6.59,0,0,0,8.49,14a8.83,8.83,0,0,0,1.5-.09.26.26,0,0,0,.2-.15.28.28,0,0,0,0-.25C8,9.49,4.35,4.23,4.65,4Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'NatureEcologyLeaf',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
