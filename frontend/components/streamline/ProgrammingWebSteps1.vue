<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12,5a2,2,0,0,0-1.79,1.11.24.24,0,0,1-.22.14H9a.24.24,0,0,1-.22-.14,2,2,0,0,0-3.58,0A.24.24,0,0,1,5,6.25H4a.24.24,0,0,1-.22-.14,2,2,0,1,0,0,1.78A.24.24,0,0,1,4,7.75H5a.24.24,0,0,1,.22.14,2,2,0,0,0,3.58,0A.24.24,0,0,1,9,7.75h1a.24.24,0,0,1,.22.14A2,2,0,1,0,12,5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ProgrammingWebSteps1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
