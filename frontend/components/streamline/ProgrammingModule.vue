<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.73,2.73a1.16,1.16,0,0,0-.52-.39L7.44.12a1.12,1.12,0,0,0-.88,0L.79,2.34a1.16,1.16,0,0,0-.52.39A1.19,1.19,0,0,0,0,3.48v7a1.23,1.23,0,0,0,.79,1.14l5.77,2.22a1.12,1.12,0,0,0,.88,0l5.77-2.22A1.23,1.23,0,0,0,14,10.52v-7A1.19,1.19,0,0,0,13.73,2.73Zm-3.18.19a.25.25,0,0,1,.16.23.25.25,0,0,1-.16.24L7.36,4.62a1,1,0,0,1-.72,0L3.45,3.39a.25.25,0,0,1-.16-.24.25.25,0,0,1,.16-.23L6.64,1.69a1,1,0,0,1,.72,0Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingModule',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
