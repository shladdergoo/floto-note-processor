# infra

## Using Pre-Commit
See https://github.com/antonbabenko/pre-commit-terraform for full details.

These hooks from the above repo have been enabled on this repo:

- `terraform_fmt` - Rewrites all Terraform configuration files to a canonical format.
- `terraform_validate` - Validates all Terraform configuration files.

### Running Manually
```bash
pre-commit run -a

Terraform fmt............................................................Passed
Terraform validate.......................................................Passed
```
