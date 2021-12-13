using GestaoPessoa.Context;
using GestaoPessoa.Interfaces;
using GestaoPessoa.Models;
using Microsoft.EntityFrameworkCore;

namespace GestaoPessoa.Services
{
    public class PessoasService : IPessoasService
    {
        private readonly AppDbContext _context;

        public PessoasService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Pessoa>> GetPessoas()
        {
            try
            {
                return await _context.Pessoas.AsNoTracking().ToListAsync();
            }
            catch
            {

                throw;
            }

        }

        public async Task<Pessoa> GetPessoa(Guid id)
        {
            try
            {
                var pessoa = await _context.Pessoas.FindAsync(id);
                return pessoa;
            }
            catch
            {

                throw;
            }

        }

        public async Task<IEnumerable<Pessoa>> GetPessoasByNome(string nome)
        {
            IEnumerable<Pessoa> alunos;
            if (!string.IsNullOrWhiteSpace(nome))
            {
                alunos = await _context.Pessoas.Where(n => n.Nome.Contains(nome)).ToListAsync();
            }
            else
            {
                alunos = await GetPessoas();
            }
            return alunos;
        }

        public async Task CreatePessoa(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePessoa(Pessoa pessoa)
        {
            _context.Entry(pessoa).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task<bool> Delete(Guid id)
        {
            var pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa != null)
            {   
                try
                {
                    await DeleteFisica(pessoa);
                }
                catch (Exception e)
                {
                    Console.WriteLine("MESSAGE: " + e.Message + "\n INNER: " + e.InnerException);
                    return false;
                }

                return true;
            }

            return false;

        }

        private async Task DeleteFisica(Pessoa pessoa)
        {
            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();
        }
    }
}
