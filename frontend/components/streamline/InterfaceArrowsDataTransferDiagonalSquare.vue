<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M14,3.5A3.5,3.5,0,0,0,10.5,0h-7A3.5,3.5,0,0,0,0,3.5v7A3.5,3.5,0,0,0,3.5,14h7A3.5,3.5,0,0,0,14,10.5ZM3.75,8.5a.74.74,0,0,1-.53-.22.75.75,0,0,1,0-1.06L6,4.43a.26.26,0,0,0,.06-.28A.25.25,0,0,0,5.84,4H4.75a.75.75,0,0,1,0-1.5h3.5A.74.74,0,0,1,8.94,3a.75.75,0,0,1-.16.82l-4.5,4.5A.74.74,0,0,1,3.75,8.5Zm7-1.72L8,9.57a.26.26,0,0,0-.06.28.25.25,0,0,0,.23.15H9.25a.75.75,0,0,1,0,1.5H5.75A.74.74,0,0,1,5.06,11a.75.75,0,0,1,.16-.82l4.5-4.5a.75.75,0,0,1,1.06,1.06Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'InterfaceArrowsDataTransferDiagonalSquare',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
