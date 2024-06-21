import image from '@/assets/personal.png'

export function App() {
  return (
    <main className="flex-1 bg-zinc-100 flex flex-col gap-4">

      <section
        className="mx-auto max-w-4xl bg-white p-4 rounded-md border grid justify-center items-center sm:grid-cols-2 gap-4 ">

        <div>
          <div className='flex flex-col gap-5'>
            <h1>Dê um destino sustentável para seus produtos e conquiste clientes conscientes! </h1>
            <p>A nossa plataforma conecta você a consumidores que valorizam a economia e o meio ambiente.</p>

            <div className="flex gap-5">
              <a href="http://" target="_blank" rel="noopener noreferrer" className='p-3 border rounded-md'>Fale Conosco</a>
              <a href="http://" target="_blank" rel="noopener noreferrer" className='p-3 border rounded-md'>Crie uma conta</a>
            </div>
          </div>
        </div>
        <img src={image} alt="person" className='justify-self-center align-self-center' />
      </section>
      <section className="mx-auto max-w-4xl bg-white p-4 rounded-md border space-y-4">
        <h2>Como funciona?</h2>
        <div className="grid grid-cols-2 gap-4 space-y-2">
          <div className='space-y-2'>
            <h3>1. Cadastre-se</h3>
            <p>Crie uma conta e comece a cadastrar seus produtos.</p>
          </div>
          <div>
            <h3>2. Anuncie</h3>
            <p>Publique seus produtos e atraia consumidores conscientes.</p>
          </div>
          <div>
            <h3>3. Venda</h3>
            <p>Conquiste clientes e faça a diferença no mundo.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl bg-white p-4 rounded-md border gap-4">
        <h2>Por que escolher a EcoMarket?</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3>Sustentabilidade</h3>
            <p>Conecte-se a consumidores que valorizam a economia e o meio ambiente.</p>
          </div>
          <div>
            <h3>Conveniência</h3>
            <p>Compre e venda produtos de forma simples e segura.</p>
          </div>
          <div>
            <h3>Comunidade</h3>
            <p>Participe de uma comunidade de pessoas que buscam um mundo melhor.</p>
          </div>
        </div>
      </section >
      <section className="mx-auto max-w-4xl bg-white p-4 rounded-md border">
        <h2>Funcionalidades</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3>Busca</h3>
            <p>Encontre produtos de forma rápida e fácil.</p>
          </div>
          <div>
            <h3>Favoritos</h3>
            <p>Salve seus produtos favoritos e compre quando quiser.</p>
          </div>
          <div>
            <h3>Comentários</h3>
            <p>Avalie produtos e vendedores e ajude a comunidade a crescer.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

