<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M12.25,2H1.75A1.76,1.76,0,0,0,0,3.75v6.5A1.76,1.76,0,0,0,1.75,12h10.5A1.76,1.76,0,0,0,14,10.25V3.75A1.76,1.76,0,0,0,12.25,2Zm-.5,8.5h-1a.75.75,0,0,1,0-1.5h1a.75.75,0,0,1,0,1.5Zm.75-4.75a.76.76,0,0,1-.75.75H2.25a.76.76,0,0,1-.75-.75v-.5a.76.76,0,0,1,.75-.75h9.5a.76.76,0,0,1,.75.75Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'MoneyAtmCard1',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
