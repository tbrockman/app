<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M13.25,2H.75A.76.76,0,0,0,0,2.75v3.5A.76.76,0,0,0,.75,7H6a.25.25,0,0,1,.25.25v3A.25.25,0,0,1,6,10.5H2.75a.75.75,0,0,0,0,1.5h8.5a.75.75,0,0,0,0-1.5H8a.25.25,0,0,1-.25-.25v-3A.25.25,0,0,1,8,7h5.25A.76.76,0,0,0,14,6.25V2.75A.76.76,0,0,0,13.25,2ZM2.5,5.5a1,1,0,1,1,1-1A1,1,0,0,1,2.5,5.5ZM7,5H5.5a.5.5,0,0,1,0-1H7A.5.5,0,0,1,7,5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ComputerDatabaseServer3',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
