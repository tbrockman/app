<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M7,0a7,7,0,1,0,7,7A7,7,0,0,0,7,0Zm5.4,6a.3.3,0,0,1-.05.21.25.25,0,0,1-.2.09H10.22A.25.25,0,0,1,10,6a13.72,13.72,0,0,0-.62-3.5.25.25,0,0,1,.36-.29A5.48,5.48,0,0,1,12.4,6ZM7,12.5c-.39,0-1.29-1.56-1.47-4.49a.26.26,0,0,1,.07-.18.23.23,0,0,1,.18-.08H8.22a.23.23,0,0,1,.18.08A.26.26,0,0,1,8.47,8C8.29,10.94,7.39,12.5,7,12.5ZM5.78,6.25a.25.25,0,0,1-.18-.08A.26.26,0,0,1,5.53,6C5.71,3.06,6.61,1.5,7,1.5S8.29,3.06,8.47,6a.26.26,0,0,1-.07.19.23.23,0,0,1-.18.08Zm-1.49-4a.25.25,0,0,1,.36.29A13.72,13.72,0,0,0,4,6a.25.25,0,0,1-.25.24H1.85a.25.25,0,0,1-.2-.09A.3.3,0,0,1,1.6,6,5.48,5.48,0,0,1,4.29,2.22ZM1.6,8.05a.3.3,0,0,1,0-.21.25.25,0,0,1,.2-.09H3.78A.25.25,0,0,1,4,8a13.72,13.72,0,0,0,.62,3.5.25.25,0,0,1-.36.29A5.48,5.48,0,0,1,1.6,8.05Zm8.11,3.73a.25.25,0,0,1-.36-.29A13.72,13.72,0,0,0,10,8a.25.25,0,0,1,.25-.24h1.93a.25.25,0,0,1,.2.09.3.3,0,0,1,.05.21A5.48,5.48,0,0,1,9.71,11.78Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWeb',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
