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
                d="M13,8a1,1,0,0,1-.71-.29L7,2.41,1.71,7.71A1,1,0,0,1,.29,6.29l6-6a1,1,0,0,1,1.42,0l6,6a1,1,0,0,1,0,1.42A1,1,0,0,1,13,8Z"
            />
            <path
                d="M12,10a.47.47,0,0,0-.15-.35l-4.5-4.5a.48.48,0,0,0-.7,0l-4.5,4.5A.47.47,0,0,0,2,10v3.5a.5.5,0,0,0,.5.5H5.75A.25.25,0,0,0,6,13.75V11.5a1,1,0,0,1,2,0v2.25a.25.25,0,0,0,.25.25H11.5a.5.5,0,0,0,.5-.5Z"
            />
        </g>
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHome2',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
