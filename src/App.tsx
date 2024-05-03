import Navbar from "./components/Navbar";
import logo from "./assets/logo.svg";
import jeovaniFrente from "./assets/jeovani_frente.svg";
import jeovaniLado from "./assets/jeovani_lado.svg";
import jeovaniEAluno from "./assets/jeovani_e_aluno.svg";
import iconDone from "./assets/icon_done.svg";
import { Bank, Books, Handshake, Student } from "@phosphor-icons/react";
export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 w-full h-screen -mt-20 max-lg:mt-0 max-xl:pt-20 ">
        <div className="max-w-7xl m-auto h-full flex  px-20  max-lg:px-10 items-center justify-between  flex-wrap">
          <div className="w-[45%] max-lg:w-full  flex flex-col max-lg:items-center">
            <img src={logo} alt="logo" className="w-full" />
            <p className="text-lg text-zinc-500 mb-2 max-lg:text-center">
              Construindo juntos um IFMA - Campus Maracanã consciente e inovador
              para uma Educação de Excelência.
            </p>
            <a
              href="/APRESENTACAO_JEOVANI.pdf"
              target="_blank"
              className="py-2 px-4 bg-green-500 rounded-md text-white"
            >
              Acessar plano de gestão
            </a>
          </div>
          <div className="h-full flex items-end    max-lg:w-full max-lg:h-auto">
            <img
              src={jeovaniFrente}
              alt="jeovani_frente"
              className="w-auto h-[80vh]  max-lg:h-auto max-xl:w-full "
            />
          </div>
        </div>
      </main>
      <div className="flex flex-wrap max-w-7xl m-auto -mt-20 gap-3 w-full justify-center mb-10 max-lg:p-10">
        <div className="p-5 shadow-md flex w-[300px] h-[400px] max-lg:w-full flex-col bg-white  rounded-sm items-center justify-center ">
          <div className="h-[40%] flex items-end">
            <Books size={80} weight="fill" className="text-blue-800" />
          </div>
          <div className="h-[60%] flex gap-2 flex-col mt-3">
            <h2 className="text-center font-bold text-lg mt-3">Valorização</h2>
            <p className="text-center text-zinc-400 text-sm">
              Enfatizando o papel dos protagonistas, servidores, colaboradores e
              alunos no processo de gestão
            </p>
          </div>
        </div>

        <div className="p-5 shadow-md flex w-[300px] h-[400px] flex-col max-lg:w-full bg-white  rounded-sm items-center justify-center ">
          <div className="h-[40%] flex items-end">
            <Bank size={80} weight="fill" className="text-green-800" />
          </div>
          <div className="h-[60%] flex gap-2 flex-col mt-3">
            <h2 className="text-center font-bold text-lg mt-3">
              Apoio a Missão Institucional
            </h2>
            <p className="text-center text-zinc-400 text-sm">
              Promovendo uma educação profissional científica e tecnológica
              comprometida com a formação cidadã para o desenvolvimento
              sustentável.
            </p>
          </div>
        </div>
        <div className="p-5 shadow-md flex w-[300px] h-[400px] flex-col max-lg:w-full bg-white rounded-sm items-center justify-center ">
          <div className="h-[40%] flex items-end">
            <Handshake size={80} weight="fill" className="text-yellow-500" />
          </div>
          <div className="h-[60%] flex gap-2 flex-col mt-3">
            <h2 className="text-center font-bold text-lg ">
              Gestão Democrática e Participativa
            </h2>
            <p className="text-center text-zinc-400 text-sm">
              Destacando a importância do diálogo, da inclusão e do respeito às
              diferenças para construir um ambiente laboral inclusivo e
              respeitoso, valorizando as habilidades e identidades de todos os
              envolvidos na comunidade acadêmica.
            </p>
          </div>
        </div>
      </div>
      <div
        id="quemsou"
        className="max-w-7xl w-full m-auto p-20  max-lg:p-0 pt-44 "
      >
        <div className="w-full  flex flex-col gap-6 bg-gray-100 relative">
          <div className="w-full  flex flex-col gap-6 p-20 max-lg:pb-0">
            <h1 className="text-blue-800 text-5xl font-bold w-[400px]  max-lg:w-full max-lg:text-center">
              Jeovani Machado Rodrigues
            </h1>

            <li className="space-y-4 list-none">
              <p className="flex gap-3">
                <img src={iconDone} alt="item" />
                Licenciado em Geografia - UEMA
              </p>
              <p className="flex gap-3">
                <img src={iconDone} alt="item" />
                Especialista em Gestão Interdisciplinar do Meio Ambiente e
                Educação Ambiental - IESF
              </p>
              <p className="flex gap-3">
                <img src={iconDone} alt="item" />
                Mestre em Saúde Pública e Meio Ambiente - FIOCRUZ
              </p>
            </li>
          </div>
          <img
            src={jeovaniLado}
            alt="jeovani lado"
            className="absolute right-0 bottom-0 max-lg:relative"
          />
        </div>
      </div>
      <div className="max-w-7xl w-full m-auto p-20 max-lg:px-10">
        <div className="w-full  flex  gap-6 bg-gray-100 max-lg:flex-col">
          <img
            src={jeovaniEAluno}
            alt="jeovani lado"
            className="h-full w-[400px]"
          />
          <div className="flex flex-col justify-center gap-8 pr-4 max-lg:p-6">
            <div className="flex gap-4">
              <div className="bg-blue-400 p-4 w-min">
                <Student size={40} weight="fill" className="text-blue-800" />
              </div>

              <h2 className="leading-6 font-bold text-lg text-blue-800 w-[200px]">
                Gestão Democrática e Participativa
              </h2>
            </div>
            <p className=" text-zinc-500 text-sm">
              Reforço minha dedicação em valorizar os alunos, reconhecendo-os
              como pilares fundamentais na comunidade acadêmica do Campus
              Maracanã. Priorizamos o protagonismo estudantil, garantindo
              espaços de diálogo e participação ativa nas decisões
              institucionais. Com políticas inclusivas e respeitosas, buscamos
              proporcionar um ambiente de aprendizado enriquecedor, onde cada
              aluno se sinta valorizado e apoiado em sua jornada educacional.
            </p>
          </div>
        </div>
      </div>
      <div
        id="principios"
        className="max-w-7xl w-full m-auto items-center flex flex-col p-20 max-lg:p-10 gap-14"
      >
        <h1 className="text-blue-800  text-6xl font-bold text-center   tracking-tighter ">
          Princípios da gestão
        </h1>
        <div className="flex flex-wrap max-w-4xl gap-3 items-center justify-center">
          <div className="w-[250px] h-[250px] max-lg:w-full max-lg:h-auto max-lg:aspect-square bg-blue-400 p-10 flex items-center relative">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Gestão dinâmica e participativa
            </h1>
          </div>
          <div className="w-[250px] h-[250px] bg-orange-400 p-10 flex items-center relative max-lg:w-full max-lg:h-auto max-lg:aspect-square">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Educação humanizadora, criativa, inovadora e inclusiva
            </h1>
          </div>
          <div className="w-[250px] h-[250px] bg-green-800 p-10 flex items-center relative max-lg:w-full max-lg:h-auto max-lg:aspect-square">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Eficiência, Eficácia e Efetividade dos processos administrativos
            </h1>
          </div>
          <div className="w-[250px] h-[250px] bg-blue-800 p-10 flex items-center relative max-lg:w-full max-lg:h-auto max-lg:aspect-square">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Transparência e responsabilidade
            </h1>
          </div>
          <div className="w-[250px] h-[250px] bg-green-500 p-10 flex items-center relative max-lg:w-full max-lg:h-auto max-lg:aspect-square">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Confiabilidade e Integridade
            </h1>
          </div>
          <div className="w-[250px] h-[250px] bg-yellow-400 p-10 flex items-center relative max-lg:w-full max-lg:h-auto max-lg:aspect-square">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Equidade e Impessoalidade
            </h1>
          </div>
          <div className="w-[250px] h-[250px] bg-indigo-600 p-10 flex items-center relative max-lg:w-full max-lg:h-auto max-lg:aspect-square">
            <div className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={iconDone} alt="item" />
            </div>
            <h1 className="font-bold tracking-tighter text-2xl max-md:text-3xl text-white">
              Compromisso social e Diálogo intercultural
            </h1>
          </div>
          <div className="w-full h-[250px] bg-gray-100 p-10 flex items-center justify-center max-w-[57%] max-md:hidden ">
            <img src={logo} alt="logo" className="h-full" />
          </div>
        </div>
      </div>
      <div className="max-w-5xl w-full m-auto items-center flex flex-col p-20 max-xl:p-10 gap-4">
        <h1 className="text-zinc-800  text-6xl max-xl:text-5xl font-bold  text-center tracking-tighter ">
          Acompanhe o plano de gestão completo
        </h1>
        <p className="text-lg  max-xl:text-base text-zinc-400 text-center">
          Convido você a conhecer nossa campanha. Acesse nosso PDF para
          descobrir como vamos continuar transformando nossa instituição juntos!
        </p>
        <a
          href="/APRESENTACAO_JEOVANI.pdf"
          target="_blank"
          className="py-2 px-4 bg-blue-800 rounded-md mt-2 text-white"
        >
          Quero conhecer
        </a>
      </div>
      <footer className="bg-blue-800 text-white text-center p-4 w-full">
        <p className="text-sm max-lg:text-xs">
          PROFESSOR JEOVANI | CANTIDATO A DIRETOR IFMA - CAMPUS SÃO LUÍS
          MARACANÃ{" "}
        </p>
      </footer>
    </>
  );
}
