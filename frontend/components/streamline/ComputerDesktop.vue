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
                d="M13,1.25A1.25,1.25,0,0,0,11.75,0H2.25A1.25,1.25,0,0,0,1,1.25v7A1.25,1.25,0,0,0,2.25,9.5h9.5A1.25,1.25,0,0,0,13,8.25Zm-10.5.5a.25.25,0,0,1,.25-.25h8.5a.25.25,0,0,1,.25.25v5a.25.25,0,0,1-.25.25H2.75a.25.25,0,0,1-.25-.25Z"
            />
            <path
                d="M13.68,12.12l-.61-.61A1.73,1.73,0,0,0,11.84,11H2.16a1.76,1.76,0,0,0-1.23.51l-.61.61A1.1,1.1,0,0,0,1.1,14H12.9a1.1,1.1,0,0,0,.78-1.88Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'ComputerDesktop',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
