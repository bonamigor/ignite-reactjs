export function RepositoryItem (props) {
    return (
        <li>
            <strong>{ props.repository?.name ?? 'Default' }</strong>
            <p>{ props.repository?.description ?? 'Default description' }</p>

            <a href={props.repository?.link ?? 'https://google.com.br'}>
                Acessar repositórios
            </a>
        </li>
    );
}