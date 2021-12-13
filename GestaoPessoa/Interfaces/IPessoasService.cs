using GestaoPessoa.Models;

namespace GestaoPessoa.Interfaces
{
    public interface IPessoasService
    {
        Task<IEnumerable<Pessoa>> GetPessoas();
        Task<Pessoa> GetPessoa(Guid id);
        Task<IEnumerable<Pessoa>> GetPessoasByNome(string nome);
        Task CreatePessoa(Pessoa model);
        Task UpdatePessoa(Pessoa model);
        Task<bool> Delete(Guid id);
    }
}
