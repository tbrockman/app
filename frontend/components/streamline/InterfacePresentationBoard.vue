<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,0H1.75A1.76,1.76,0,0,0,0,1.75V9a1.76,1.76,0,0,0,1.75,1.75H3.09a.25.25,0,0,1,.2.41L1.93,12.77a.75.75,0,1,0,1.14,1l2.45-2.89a.25.25,0,0,1,.19-.09H6a.25.25,0,0,1,.25.25v2.25a.75.75,0,0,0,1.5,0V11A.25.25,0,0,1,8,10.75h.29a.25.25,0,0,1,.19.09l2.45,2.89a.75.75,0,1,0,1.14-1l-1.36-1.61a.25.25,0,0,1,.2-.41h1.34A1.76,1.76,0,0,0,14,9V1.75A1.76,1.76,0,0,0,12.25,0Zm0,9.25H1.75A.25.25,0,0,1,1.5,9V4.25A.25.25,0,0,1,1.75,4h10.5a.25.25,0,0,1,.25.25V9A.25.25,0,0,1,12.25,9.25Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfacePresentationBoard',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
