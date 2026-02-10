# 🚚 Mudanças Fialho & Silva - Website Oficial

Site profissional e moderno para empresa de mudanças e transportes.

## ✨ Características

- ✅ Design moderno e elegante
- ✅ 100% Responsivo (Mobile, Tablet, Desktop)
- ✅ Otimizado para SEO
- ✅ Animações suaves e profissionais
- ✅ Formulário de contacto funcional
- ✅ Galeria de imagens
- ✅ Testemunhos de clientes
- ✅ Múltiplas secções informativas
- ✅ Call-to-actions estratégicos
- ✅ Performance otimizada

## 🚀 Instalação Rápida

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Passos

1. **Extrair o ZIP**
   ```bash
   # Extrair para a pasta desejada
   ```

2. **Instalar Dependências**
   ```bash
   npm install
   ```

3. **Executar em Desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abrir no Navegador**
   ```
   http://localhost:3000
   ```

## 📦 Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar build de produção
npm start
```

## 🎨 Personalização

### Cores
Edite as cores em `tailwind.config.ts`:
- `primary`: Cor principal (laranja/dourado)
- `accent`: Cor de destaque (azul)

### Conteúdo
- **Serviços**: `components/Services.tsx`
- **Testemunhos**: `components/Testimonials.tsx`
- **Informações de Contacto**: `components/Contact.tsx` e `components/Footer.tsx`

### Imagens
Todas as imagens usam Unsplash. Para usar suas próprias imagens:
1. Adicione as imagens à pasta `public/images/`
2. Substitua os URLs nas componentes
3. Exemplo: `src="/images/sua-imagem.jpg"`

## 📂 Estrutura do Projeto

```
mudancas-fialho-silva/
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Header.tsx           # Cabeçalho/Menu
│   ├── Hero.tsx             # Seção principal
│   ├── Services.tsx         # Serviços
│   ├── WhyChooseUs.tsx      # Porquê escolher-nos
│   ├── HowItWorks.tsx       # Como funciona
│   ├── Gallery.tsx          # Galeria
│   ├── Testimonials.tsx     # Testemunhos
│   ├── CTA.tsx              # Call-to-action
│   ├── Contact.tsx          # Contacto
│   └── Footer.tsx           # Rodapé
├── public/                  # Arquivos estáticos
├── package.json             # Dependências
└── tailwind.config.ts       # Configuração Tailwind
```

## 🔧 Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações (opcional)
- **Lucide React** - Ícones

## 📱 Secções do Site

1. **Hero** - Apresentação principal com CTA
2. **Serviços** - 6 serviços principais
3. **Porquê Escolher-nos** - Diferenciais da empresa
4. **Como Funciona** - 4 passos simples
5. **Galeria** - Imagens dos trabalhos
6. **Testemunhos** - Avaliações de clientes
7. **CTA** - Chamada para ação
8. **Contacto** - Formulário e informações

## 🎯 Otimizações Incluídas

- ✅ SEO otimizado com meta tags
- ✅ Imagens otimizadas (Next.js Image)
- ✅ Lazy loading automático
- ✅ Code splitting
- ✅ CSS otimizado
- ✅ Performance Score 90+

## 📞 Informações de Contacto

- **Telefone**: 919 369 582
- **Morada**: R. da Eira 30, 2500-413 Carvalhal Benfeito
- **Email**: geral@fialhoesilva.pt

## 🆘 Suporte

Se tiver algum problema:

1. Certifique-se que tem Node.js 18+ instalado
2. Apague `node_modules` e `.next` e reinstale:
   ```bash
   rm -rf node_modules .next
   npm install
   npm run dev
   ```

3. Se o erro persistir, verifique a porta 3000:
   ```bash
   npm run dev -- -p 3001
   ```

## 📝 Notas

- O formulário de contacto simula o envio (frontend only)
- Para integrar com backend, edite `components/Contact.tsx`
- Considere adicionar Google Analytics
- Considere adicionar reCAPTCHA no formulário

## 🚀 Deploy

Recomendamos deploy na Vercel (gratuito):

1. Push para GitHub
2. Conecte com Vercel
3. Deploy automático!

---

**Desenvolvido com ❤️ para Mudanças Fialho & Silva**
