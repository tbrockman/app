<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,1.5A1.5,1.5,0,0,0,12.5,0H1.5A1.5,1.5,0,0,0,0,1.5V10a1.5,1.5,0,0,0,1.5,1.5H2.75a.25.25,0,0,1,.25.25V13.5a.5.5,0,0,0,.28.45A.59.59,0,0,0,3.5,14a.51.51,0,0,0,.31-.11l2.92-2.34a.3.3,0,0,1,.16-.05H12.5A1.5,1.5,0,0,0,14,10ZM7,10A1,1,0,1,1,8,9,1,1,0,0,1,7,10ZM7,7A.75.75,0,0,1,7,5.5,1.25,1.25,0,1,0,5.75,4.25a.75.75,0,0,1-1.5,0A2.75,2.75,0,1,1,7,7Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceHelpQuestionMessage',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
