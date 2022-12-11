export class LoadingHelper {
    static exibir() {
        document.querySelector('.loadingContainer')?.classList.remove('hidden')
    }

    static oculto() {
        setTimeout(() => {
            document.querySelector('.loadingContainer')?.classList.add('hidden')
        }, 500)
    }
}