const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

function alternaMenu(abrir) {
    menu.classList.toggle('menu-lateral--ativo', abrir)
    botaoMenu.setAttribute('aria-expanded', String(abrir))
    botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu')
}

botaoMenu.addEventListener('click', () => {
    alternaMenu(!menu.classList.contains('menu-lateral--ativo'))
})

// Fecha o menu com Esc
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('menu-lateral--ativo')) {
        alternaMenu(false)
        botaoMenu.focus()
    }
})

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (evento) => {
    const clicouFora = !menu.contains(evento.target) && !botaoMenu.contains(evento.target)
    if (clicouFora && menu.classList.contains('menu-lateral--ativo')) {
        alternaMenu(false)
    }
})
