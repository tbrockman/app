<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        fill="currentColor"
        :width="size"
        :height="size"
    >
        <path
            d="M11.5,0h-9A1.5,1.5,0,0,0,1,1.5v12a.5.5,0,0,0,.5.5H5.25a.25.25,0,0,0,.25-.25V11a.5.5,0,0,1,.5-.5H8a.5.5,0,0,1,.5.5v2.75a.25.25,0,0,0,.25.25H12.5a.5.5,0,0,0,.5-.5V1.5A1.5,1.5,0,0,0,11.5,0ZM5,9H3.5a.75.75,0,0,1,0-1.5H5A.75.75,0,0,1,5,9ZM5,6.25H3.5a.75.75,0,0,1,0-1.5H5a.75.75,0,0,1,0,1.5ZM5,3.5H3.5A.75.75,0,0,1,3.5,2H5A.75.75,0,0,1,5,3.5ZM10.5,9H9A.75.75,0,0,1,9,7.5h1.5a.75.75,0,0,1,0,1.5Zm0-2.75H9a.75.75,0,0,1,0-1.5h1.5a.75.75,0,0,1,0,1.5Zm0-2.75H9A.75.75,0,0,1,9,2h1.5a.75.75,0,0,1,0,1.5Z"
        />
    </svg>
</template>
<script>
export default {
    name: 'ShoppingStoreFactoryBuilding',
    props: {
        size: {
            type: String,
            required: false,
            default: '14',
        },
    },
};
</script>
