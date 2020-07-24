<template>
    <div class='profileEdit'>
        <SecondHeader title='Edit Profile'></SecondHeader>
        <div class='content'>
            <Card>
                <ProfileForm submit='Edit' mismatch='true'></ProfileForm>
            </Card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import ProfileForm from '@/components/ProfileForm'
import SecondHeader from '@/components/SecondHeader'

export default {
    name: 'ProfileEdit',
    components: {
        Card,
        ProfileForm,
        SecondHeader
    }
}
</script>