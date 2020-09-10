<template>
  <div class="dev-page">
    <h2 class="title">EditDebugMode</h2>
    <EditDebugMode />

    <h2 class="title">EditSinglePlay</h2>
    <EditSinglePlay />

    <h2 class="title">EditLocalStrage</h2>
    <EditLocalStorage />

    <h2 class="title">MakingQuestion</h2>
    <MakingQuestion />

    <h2 class="title">UiTest</h2>
    <UiTest />
  </div>
</template>

<script>
import EditDebugMode from '@/components/pages/dev/EditDebugMode'
import EditSinglePlay from '@/components/pages/dev/EditSinglePlay'
import EditLocalStorage from '@/components/pages/dev/EditLocalStorage'
import MakingQuestion from '@/components/pages/dev/MakingQuestion'
import UiTest from '@/components/pages/dev/UiTest'

export default {
  components: {
    EditDebugMode,
    EditSinglePlay,
    EditLocalStorage,
    MakingQuestion,
    UiTest
  }
}
</script>
