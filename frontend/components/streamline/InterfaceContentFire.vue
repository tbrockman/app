<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M6.07,0a.41.41,0,0,0-.44,0,.28.28,0,0,0-.07.37c1.3,2.14,1.62,5.15,0,6.9a.24.24,0,0,1-.36,0A8.08,8.08,0,0,1,3.91,5.89a.48.48,0,0,0-.33-.24.54.54,0,0,0-.41.09A4.12,4.12,0,0,0,1.5,9.15C1.54,11.59,3.55,14,7,14s5.37-2.16,5.49-4.85C12.64,5.93,10.34,1.94,6.07,0ZM7.75,12a.75.75,0,0,1,0-1.5A1.25,1.25,0,0,0,9,9.25a.75.75,0,0,1,1.5,0A2.75,2.75,0,0,1,7.75,12Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceContentFire',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
