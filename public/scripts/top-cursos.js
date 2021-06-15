/// <reference path="../vendor/jquery-3.5.1.js" />
/// <reference path="index.d.ts" />

/**
 * @type {import(".").TopCurso[]}
 */
const cursos = [
  {
    avaliacao: 4,
    categorias: ['Computação', 'Matemática', 'Trabalho em Equipe'],
    descricao:
      'Um cientista da computação, como é chamado o profissional formado em Ciência da Computação, pode ser contratado para trabalhar em uma equipe de desenvolvedores, criando software de acordo com a necessidade dos clientes. Também pode atuar no departamento de Pesquisa e Desenvolvimento (P&D)de uma empresa.',
    imagem: 'assets/img/cc top cursos.jpg',
    titulo: 'Ciência da Computação',
  },
  {
    avaliacao: 5,
    categorias: ['Medicina', 'Área de Saúde'],
    descricao:
      'O médico é o profissional que busca diagnosticar, tratar e curar pessoas doentes. Ele pode ser generalista, ou seja, atender todos os tipos de encaminhamentos da área da saúde, ou especializado em alguma atividade ou função específica. Para atender seus pacientes, o médico pode indicar tratamentos a base de remédios, realizar procedimentos cirúrgicos e solicitar exames de saúde para melhor diagnóstico ou acompanhamento da evolução do paciente.',
    imagem: 'assets/img/med top cursos.jpg',
    titulo: 'Medicina',
  },
  {
    avaliacao: 4,
    categorias: ['Matemática', 'Programação'],
    descricao:
      'O profissional formado em Matemática Computacional possui uma visão mista da Matemática e da Computação e pode atuar na solução de problemas que necessitem de conhecimento nas duas áreas.',
    imagem: 'assets/img/mc top cursos.jpg',
    titulo: 'Matemática Computacional',
  },
  {
    avaliacao: 3,
    categorias: ['Direito', 'Advocacia'],
    descricao:
      'O profissional formado no curso de Direito podem optar por seguir a carreira jurídica ou se tornar advogado. As duas opções oferecem diversas profissões e caminhos a seguir. Para atuar como advogado, o bacharel em Direito precisa realizar o Exame da OAB (Ordem dos Advogados do Brasil). Somente após ser aprovado nesta prova é que o profissional recebe o registro na OAB e pode exercer a profissão.',
    imagem: 'assets/img/direito top cursos.jpg',
    titulo: 'Direito',
  },
]

class TopCursos {
  /**
   * @type {JQuery<HTMLElement>}
   */
  #content

  constructor() {
    this.#content = $('#content')
  }

  clear() {
    this.#content.html('')
  }

  /**
   * @param {number} avaliacao
   * @returns {string}
   */
  #rating(avaliacao) {
    return new Array(5)
      .fill(1)
      .map(
        (v, k) =>
          `<span class="fa fa-star ${k < avaliacao ? 'checked' : ''}"></span>`
      )
      .join('')
  }

  /**
   * @param {string[]} categorias
   * @returns {string}
   */
  #categories(categorias) {
    return categorias
      .map((v) => `<span class="badge badge-pill badge-info">${v}</span>`)
      .join('')
  }

  render() {
    this.#content.append(
      cursos
        .sort((a, b) => {
          /**
           * @type {'av' | 'rem' | 'com' | 'emp' | 'emp2'}
           */
          const order = 'av'
          switch (order) {
            case 'rem':
              return 1
            case 'com':
              return 1
            case 'emp':
              return 1
            case 'emp2':
              return 1
            case 'av':
              return b.avaliacao - a.avaliacao
            default:
              return 1
          }
        })
        .map((v, k) => {
          return $(`
      <div class="row curso">
        <div class="row dentroCurso titulo">
          <div class="dentroTitulo">
            <h2><i class="fas fa-award"></i> Top ${k + 1}</h2>
          </div>
        </div>
        <div class="row dentroCurso">
          <div class="col-12 col-xl-3 cursoImgDiv mb-2">
            <img src="${
              v.imagem
            }" class="cursoImg w-100 rounded" style="object-fit: cover;">
          </div>
          <div class="col-12 col-xl-9 cursoTexto">
            <div class="row rakingEtitulo">
              <h3>${v.titulo}</h3>
              <div class="starRating">
                ${this.#rating(v.avaliacao)}
              </div>
            </div>
            <p>
              ${v.descricao}
              <br>
              <br>
              ${this.#categories(v.categorias)}
            </p>
          </div>
        </div>
        <hr>
      </div>
      `)
        })
    )
  }
}

$(() => {
  const topCursos = new TopCursos()
  topCursos.clear()
  topCursos.render()
})
