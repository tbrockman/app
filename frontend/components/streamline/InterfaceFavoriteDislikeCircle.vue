<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0ZM9.76,8.38H7.16a.25.25,0,0,0-.25.24v1.66a.72.72,0,0,1-1.33.38L4,8.12A.25.25,0,0,0,3.8,8h0a.25.25,0,0,1-.25-.25V4.12a.25.25,0,0,1,.25-.24h.13a.2.2,0,0,0,.11,0l.42-.21A1.27,1.27,0,0,1,5,3.5H9.24a.75.75,0,0,1,.74.64l.51,3.37A.75.75,0,0,1,9.76,8.38Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceFavoriteDislikeCircle',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
