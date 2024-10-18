import styles from './styles.module.scss'

const link =
    'https://img.freepik.com/fotos-gratis/um-lobo-colorido-com-um-fundo-preto_1340-40203.jpg'

export function ComponentImage() {
    return (
        <div className={styles.container}>
            <img src={link} />
        </div>
    )
}
